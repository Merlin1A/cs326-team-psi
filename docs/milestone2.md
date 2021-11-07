# Milestone 2

Team Name: *Team Psi*

Appication Name: *Course Overflow*

## Team Overview
* [Jesse Brookins](https://github.com/Merlin1A)
* [Johno Pomerat](https://github.com/sperek27)
* [Lynn Li](https://github.com/lynnli0)

## Division of Labor
* [Jesse Brookins](https://github.com/Merlin1A)
Added logic to programmatically generate the reviews for each course from 'dummy' json data. Wrote logic for voting functionality and the associated html/ stylings. Also collaborated with Johno and Lynn on the API structure, and helped implement it. 
* [Johno Pomerat](https://github.com/sperek27)
Designed and wrote the internal architecture of the dummy server. Created
client-side logic to process GET requests to enable dynamic creation of the
wireframe pages. Wrote all the logic to render courses dynamically on the
landing page. Assisted Jesse and Lynn by fixing bugs and writing documentation.
* [Lynn Li](https://github.com/lynnli0)
Help generate 'dummy' JSON data for the courses landing page. Cleaned up the user interface. Implemented validation/alert systems for ratings and account creation upon submission to ensure user data is correct. Collaborated Jesse and Johno with documentation and API structure. 

## Part 1: API Planning

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

##### Objects used in populating json files
* Course Object <br />
{ <br />
  "course_name": String,<br />
  "course_description": String, <br />
  "professors": String[], <br />
  "overall_rating": Number, <br />
  "overall_difficulty": Number, <br />
  "number_reviews": Number, <br />
  "number_ratings": Number, <br />
  "course_criteria": String[] <br />
}

* Review Object <br />
{ <br />
  "uid": Number, <br />
  "user_id": Number, <br />
  "comment": String, <br />
  "upvotes": Number, <br />
  "downvotes": Number <br />
}

## Part 2: Front-end Implementation
* CREATE 
<img width="1429" alt="create" src="https://user-images.githubusercontent.com/38598996/140628206-ed8387f7-0172-44d1-af3a-fd5a85df5e87.png">
* DELETE
<img width="764" alt="delete" src="https://user-images.githubusercontent.com/38598996/140628208-9eee65cc-1a22-4b8b-a1be-abf26494d33c.png">
* READ
<img width="1157" alt="read" src="https://user-images.githubusercontent.com/38598996/140628210-e7e60eba-554c-4d94-a5bf-8f18a03ac5b6.png">
* UPDATE 
<img width="1157" alt="update" src="https://user-images.githubusercontent.com/38598996/140628215-89b8834f-6468-41e1-ac03-554a6a1569ab.png">


## Part 3: Deployment

##### Heroku Site Deployment:
https://courseoverflow.herokuapp.com
