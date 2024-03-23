## Stock Tracker
### Course: Software Engineering

This project was done in a group with Sharon Soba and Alex Harris. Alex did the frontend work and Sharon and I did the backend work. 
<br>

#### Run Instructions

1. 

2. 

<p>As a group project, we create a basic website where users can subscribe to receive notifications when the user specified stock reached their desired buy or sell price. We did this by creating a frontend that would get the user information and save it in a CSV file. We called the Polygon.io stock API to get stock ticker information and stock prices.  We then ran checks for each user to see if the stocks they subscribed to were at or beyond the desired buy or sell price. A python script to email users would then be triggered for the appropraite users, informing them that their desired stock reached the price they set. Because the API only allows for a daily api call for free, this is the cadence we used. Ideally, we would check the stock prices every few minutes. The python files comparing the user data and the stock data as well as the email ptthon script would be run on a regular interval using a crontab.</p> 


#### Future Planned Features:

* Google OAuth integration.
* Replace CSV file with a Google Cloud postgres database.
* Display all stocks currently subscribed to.
