## Stock Tracker
### Course: Software Engineering

#### Run Instructions

1. Run <code>pip install -r requirements.txt</code>

2. Open two terminal windows

3. In one terminal, run: <code>python3 ./flask_app/index.py</code>

4. In the other terminal, run: <code>npm run start</code>

*  The web application no longer updates stock prices as it has stopped making API calls to Polygon.io.  This means that an email will not be triggered as there is no stock information to compare to. You will notice that upon launching the webpage, a database folder is created with a users file.  This is where all subscribers would be saved.


#### Description
<p>I create a basic website where users can subscribe to receive notifications when the user specified stock reaches their desired buy or sell price. I did this by creating a frontend that would get the user information and save it in a CSV file. I called the Polygon.io stock API to get stock ticker information and stock prices.  Then I ran checks for each user to see if the stocks they subscribed to were at or beyond the desired buy or sell price. A python script to email users would then be triggered for the appropraite users, informing them that their desired stock reached the price they set. The user information is saved in the user.csv filed in the database folder that is created.  Once the database.py file is run (were the API keys active), the currenty stock information would be saved in the database folder as well. Then the emailer.py file would compare the data between the stocks and users and email every user whose subscription met the criteria. 

#### Main Files
* flask_app/index.py - This is the API that the website frontend calls to add or delete user subscriptions. User information is added to a CSV file and stored on the local computer.
* database.py - makes the API call to Polygon.io for the stock information. This is then stored in a CSV file and stored on the local computer.
* emailer.py - This compares the information from the database file and the user file and then sends emails to users that match desired criteria.
* src folder - Contains all the frontend website code.


#### Future Planned Features:

* Google OAuth integration.
* Replace CSV file with a Google Cloud postgres database.
* Display all stocks currently subscribed to.
