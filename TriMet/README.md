## Trimet Data Engineering Project
### Course: Data Engineering
This project was done in a group with the wonderful [Anamika Nayak](https://github.com/anamika8).
<br>


<p>We consumed TriMet data which was published daily through an API. This data published through the API was "breadcrumb data", which consisted of bus location data. Each bus would ping its location every 60 seconds with its coordinates, bus number, and the time.  We combined that with bus route data scraped from the TriMet website. All this data was cleaned, validated, transformed, and loaded into a database. We setup a pipeline to consume the breadcrumb data daily and load that data into the database. When we consumed enough data throughout the term, we then created visualizations to understand TriMet bus pattern activity. Because we did not want to manually check the database everyday, we wrote a python script that would email us daily notify us if the data load was successful or if it failed. If the data load was successful, we would get some basic information about the load, like the number of rows pulled from the API, the number of rows successful inserted into the database, and the duration of the load. If the load failed, we would get the last status of the load (where it failed) and the time of the failure. </p>
<br>


<p>
File Descriptions: 
  
* producer.py: makes an API call to get data. This file then calls the assertions and transformation files.
  
* assertions.py: make sure data quality checks are met and raise errors if basic requirements are not met.

* transformation.py: transform the data into a useable format.

* consumer.py: consume the data using Apache Kafka.

* load_into_db.py: load the API data into the database for later analysis.

* trip_data_collection.py: scrape the data from the TriMet website. 

* trip_assertions.py: data quality checks for the trip data from TriMet website.

* trip_transformation.py: clean and arrange data to a useable format.

* trip_producer.py: produce data for the consumer using Apache Kafka.

* trip_consumer.py: consume the data being produced using Apache Kafka.

* trip_load_into_db.py: load the data from Apache Kafka into a database for later analysis.

* table_creation.sql: creates the required database tables. This file is only needed for a one time run.

* email-alert.py: python script that would email us whether the daily load succeeded or failed.

* visualizations folder: contains code to launch a website and see the seven visualization we created. It also contains all tsv and geojson files we created to make the visualizations. More details on how to launch the visualizations in the readme within that folder.
</p>
