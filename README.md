# Stock-Show Project
This is a Stock Market Charting Website made with Angular, Spring Boot and MySQL
## Prerequisites
* Java 8/8+
* Angular ( for Frontend )
* Node.js ( for Angular ) [https://nodejs.org/en/download/]
* Xampp ( for MySQL Connectivity with phpMyAdmin ) [https://www.apachefriends.org/download.html]
* Visual Studio Code ( Frontend Editor ) [https://code.visualstudio.com/download]
* SpringToolSuite/IntelliJ ( Backend Editor ) [https://spring.io/tools]

## Steps to Run the Application
Follow these three Steps in order
 
#### Database
* Open Xampp Control Panel.
* Start MySQL Port.
* Start Apache Port ( to Manage Database in phpMyAdmin ) 
* URL to Manage Database after starting Apache And MySQL Port [http://localhost/phpmyadmin] (Optional)

#### Backend
* Import all 6 microservices projects from **'Backend'** directory into SpringToolSuite/IntelliJ.
* First run **'stock-registry'**(Eureka Server) as a spring boot app.
* Run rest of the 5 microservices as a spring boot app in any order.
* Check the status of all microservices on port ("localhost:8761") [Optional]

#### Frontend
* Import **'Frontend/UI'** folder  in VS Code.
* Run `npm install` command in the terminal (to Download all the required Node Modules)
* Run `ng serve` command in the terminal to run the application.



## Note

* Stock Price Excel Files are stored in the **Dataset** Folder.
* Import Stock Price Excel Files of five companies from **Dataset** directory.
* Sample Data will get automatically stored into the Databases on starting the application for better User Experience
