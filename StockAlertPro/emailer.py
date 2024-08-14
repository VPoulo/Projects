# Reads a CSV file line by line and sends an email. 
# This scipt expects the CSV file to contain the following format:
# <name1>,<email1>,<ticker>,<price>
# <name2>,<email2>,<ticker>,<price>

# This script requires the use of a .env file that contains the email password. 
# Must import: pip install python-decouple before running the script. 

import smtplib
import ssl
import csv
from email.message import EmailMessage
from decouple import config

global email_sender
global password
email_sender = "datawranglersalert@gmail.com"
password = config('PASSWORD')


# Read one line of CSV at a time and call email function. 
def main():
    with open("../database/notification.csv", newline='') as file:
        emailList = csv.reader(file)
        for row in emailList:
            sendEmail(row)

    file.close()

# Send an email whatever recipient is passed in as an argument. 
# If an email fails to send, just return. 
def sendEmail(recipientInfo):
    try:
        name = recipientInfo[0]
        email_receiver = recipientInfo[1]
        ticker = recipientInfo[2]
        price = recipientInfo[3]
        body = f'Hello {name}, \n We are pleased to inform you that {ticker} has reached your target price of ${price}!'\
            '\n Woohoo!! \n Best, Stock Whisperers'
        
        # Create email message package
        em = EmailMessage()
        em['From'] = email_sender
        em['To'] = email_receiver
        em['Subject'] = "Stock Alert"
        em.set_content(body)
        
        # Create secure connection.
        context = ssl.create_default_context()
        
        # Send the email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, password)
            smtp.sendmail(email_sender, email_receiver, em.as_string())
    
    except Exception as e:
        return

if __name__ == "__main__":
    main()
    