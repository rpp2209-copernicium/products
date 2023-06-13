Project Title: Atelier E-Commerce Products Microservice API



Overview:

A prior client request that our team build a series of custom built back-end API microservices that could handle the increasing demand on web traffic to the client's e-commerce website. I was assigned with creating the microservice to provide the client with an API for all of the data regarding their product such as product images, description, SKUs, styles, styles images, and more.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Description:

A more detailed outline of the project. What does it do? Is there a high level list of features? If describing a project that has visual features, consider adding pictures or animations of the features and functionality in this section. See Adding Screen Captures below.

This project focuses on the backend. The client provided us with a legacy repository containing their e-commerce web application that was originally built using data from their own service. I was able to utilize the legacy web application to test the functionality of the new API microservice that I built for my client. 

I created a two-step ETL process that takes all of the customer data and transforms it and populates the backend Postgres database. The database was then optimized for queries retreieving data from the Postgres database. The database queries once optimized provide sub 50ms queries for all client-sided queries. The microservice was then optimized on the cloud further to maintain network traffic loads up to 1250 requests per second. 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Installation:

In order to install this project and have it up and running, a developer may fork this repository to their own GitHub profile and clone it down to their local computer. 

Next, a developer can navigate to the folder and npm install which will download all the dependencies that the application uses. 

Next, a developer needs to install Postgres onto their local computer per the instructions on this website https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/. 

Once Postgres is installed, a developer now needs to create a database according to their naming conventions and should also update the example.env. 

Example.env is a reference for the .env file that holds all the user's sensitive information. It is added to the gitignore to which a developer will not need to worry about uploading sensitive information. 

The developer should create a copy of the example.env and rename it to .env while updating the fields to the correct values that the developer will use such as database name (whatever you named the database), user (Postgres user), database port (5432 is default for Postgres so use this), database password (usually its '' for localhost unless named otherwise) and database host (localhost unless on an EC2 instance). 

This gives the developer full access to my project and by then running NPM start, the developer will be able to use the API microservice and make requests for data by sending a request to localhost:3000 at the products endpoint (provided a productid ex. localhost:3000/products/1000) and the styles endpoint (example localhost:3000/products/1000/styles) to return data. 
