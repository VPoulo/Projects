## Stock Tracker
### Course: Software Engineering

This project was done in a group with Sharon Soba and Alex Harris. Alex did the frontend work and Sharon and I did the backend work. 
<br>

#### Run Instructions

1. 

2.  

* The website will launch but will not work. The database.py and emailer.py must be schedule on a cron tab. This is not done because the API key is stored privately for security reasons. 

<p>As a group project, we create a basic website where users can subscribe to receive notifications when the user specified stock reached their desired buy or sell price. We did this by creating a frontend that would get the user information and save it in a CSV file. We called the Polygon.io stock API to get stock ticker information and stock prices.  We then ran checks for each user to see if the stocks they subscribed to were at or beyond the desired buy or sell price. A python script to email users would then be triggered for the appropraite users, informing them that their desired stock reached the price they set. Because the API only allows for a daily api call for free, this is the cadence we used. Ideally, we would check the stock prices every few minutes. The python files comparing the user data and the stock data as well as the email ptthon script would be run on a regular interval using a crontab.</p> 

* flask_app/index.py - This is the API that the website frontend calls to add or delete user subscriptions. User information is added to a CSV file and stored on the local computer.
* database.py - makes the API call to Polygon.io for the stock information. This is then stored in a CSV file and stored on the local computer.
* emailer.py - This compares the information from the database file and the user file and then sends emails to users that match desired criteria.
* src folder - Contains all the frontend website code.



#### Future Planned Features:

* Google OAuth integration.
* Replace CSV file with a Google Cloud postgres database.
* Display all stocks currently subscribed to.
