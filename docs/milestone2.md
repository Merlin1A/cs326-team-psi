# Milestone 2

Team Name: *Team Psi*

Appication Name: *Course Overflow*

## Team Overview
* [Jesse Brookins](https://github.com/Merlin1A)
* [Johno Pomerat](https://github.com/sperek27)
* [Lynn Li](https://github.com/lynnli0)

## Division of Labor
* [Jesse Brookins](https://github.com/Merlin1A)
Created the login page, and helped design and iterate the page layout. Assisted with numerous page features. 
* [Johno Pomerat](https://github.com/sperek27)
Built the initial wireframe using bootstrap collaborated with Jesse and Lynn on
designing the page layout as well. Iterated on wireframe and assisted with
everything else
* [Lynn Li](https://github.com/lynnli0)
Designed and created the inital layout/wireframe using Whimiscal with Jesse and Johno. Drafted and create the templates for settings.html, createacc.html, and ratings.html as well as the content in the card expansion for index.html.

## Part 0: Data Interactions

#### Project API Planning
* Creation: User Accounts, Reviews & Data Points
* Read: Viewing Courses & Statistics
* Updating: Overall Course Statistics & Course Ratings
* Deletion: Downvoted Reviews & Account Termination

#### API Details 
We are creating an in-house API that will act as an intermediary between our database and interface. It will deliver a user response from the server (receiving a request) and send a response from the server back to the user, which will appear in our interface. The following section details our API endpoints.

##### API Endpoints
* (POST) /account/create: sends data from user's input (new account information such as email, name, and password) to the server and creates a new account for the user to access the site
* (GET) /account/login: retrieves user's login information from server in order for them to access the site
* (PUT) /account/update: updates user's existing account information
* (DELETE) /account/delete: deletes user's account 
* (GET) /courses/get: retrieves course information from server
* (POST) /courses/review/new: sends data from user's input (new review written by user) to the server and creates a new review for course 
* (POST) /courses/review/vote: sends data from user's input (new vote from user) to server and creates new vote for course
* (GET) /courses/review/get: retrieves the course reviews from server 
* (POST) /courses/survey/new: sends data from user's input (new survey filled by user) to server 

# Part 3: Deployment

##### Heroku Site Deployment:
https://courseoverflow.herokuapp.com
