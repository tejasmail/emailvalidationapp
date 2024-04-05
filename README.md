# EmailValidationApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

This app comprises of 2 components (email-form and dob-validation) and 1 service (ap-service)

# Email-form component
In this component we have textbox to get email from user and when user click on send email button, we are calling send email service. On success full response we will receive a unique id, that id can we used to send to DOB-validation component.

# DOB-validation component
In this component we will get the id using request param. We have a textbox where user can enter DOB. once Validate button is clicked. Api call is made and displays a toast message whether its valid or invalid age

# Api service
Here we have 2 services
    1. sendEmail service:  This service is used to send the API call to BE, so that from BE we can send Email to users mail id with unique id. However is just simulate like that mail is send and unique id is return from BE with the help of RXJS Operators of and delay, To automatically redirect to dob-validation screen. However in real time, mail we be send to user with domain.com/uniqueKey, on click of mail he will be redirected to dob-validation screen.
    2. validateDob service: This service will actually calculate whether selected is greater than today date, if it is greater then 18 it will return valid age else invalid age. In this also i have simulated api call via of and delay operator in RXJS.