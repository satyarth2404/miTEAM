# mi-TEAM
A Spring Boot and Angular Application to track and recruit employees

## Overview
The app's backend is developed using Spring Boot and Spring Data JPA. The angular consumes the backend service's RESTful mappings (using HttpClientModule) and fetches and renders the information to user's portal. Angular Material is used for various user friendly UI features in order to make the application more interactive.

## Components:
- Angular client
- Spring Boot
- Spring Data JPA

## Layers & Modules
- Application Layer
- Service Layer 
- DAO Layer (Repository)
- Controller

## Demo
![image](https://user-images.githubusercontent.com/34190266/80832463-590ff100-8c0a-11ea-8058-b7d33fda2f06.png)
![image](https://user-images.githubusercontent.com/34190266/80832580-8c528000-8c0a-11ea-9ea3-79a52548d3d9.png)

## Documentation
 Swagger is used for API Documentation. 
 Follow the steps to view the docs:
 - Go to the root directory of the project
 - Execute Command *mvnw package* followed by command *mvnw spring-boot:run*.
 - Wait for the server to start and click on the following link to view the Documenation:  [Documentation](http://localhost:8085/swagger-ui.html)


![image](https://user-images.githubusercontent.com/34190266/81482648-37d88180-9256-11ea-841f-f916178efbd0.png)


