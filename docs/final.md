
### Heroku Deployment
https://courseoverflow.herokuapp.com
https://courseoverflow.app

<hr /> <br />

# Final Report

### Title <br />
Team PSI
### Subtitle <br />
Course Overflow
### Semester <br /> 
Fall 2021
### Overview <br />
Course Overflow is designed to be an information repository on computer science courses at UMass Amherst. **Users with valid http://umass.edu/ email addresses** will be able to create accounts where they can rate courses, write anonymous course reviews, and view detailed statistics for each course in the computer science department. The service is only available for UMass Amherst students. The rankings would be across a couple of dimensions. Users could fill in data, including the average number of hours spent per week, record their received grades anonymously, the overall difficulty, and more. Users could also write reviews and upvote/downvote other reviews. There are two similar alternatives from our research: Rate my Professor and CICS course guides. We differ significantly from Rate my Professor, which is just professor-specific, only tracks two metrics, and has no statistics, workload, or sorting reviews system. For the CICS course guides, we scrape them to display on each course card.
### Team Members <br /> 
* [Jesse Brookins](https://github.com/Merlin1A) <br />
 <i> @MerlinA </i>
* [Johno Pomerat](https://github.com/sperek27) <br />
 <i> @sperek27 </i>
* [Lynn Li](https://github.com/lynnli0) <br />
 <i> @lynnli0 </i>
### User Interface <br /> 
<img width="1440" alt="course_cards" src="https://user-images.githubusercontent.com/38598996/145729413-37a235a5-f360-46d8-8ddb-f63d55ffba7e.png">
<img width="1440" alt="account" src="https://user-images.githubusercontent.com/38598996/145729422-9cc191d6-0097-4f72-95f4-aab33e597313.png">
<img width="1440" alt="landing" src="https://user-images.githubusercontent.com/38598996/145729425-540a13f0-5247-474d-94e9-365b94aecedf.png">
<img width="1440" alt="invalid-cred" src="https://user-images.githubusercontent.com/38598996/145729429-1f3198ae-c636-441f-927c-4159fa7bcd26.png">

### APIs <br /> 
#### CRUD
* Creation: User Accounts, Reviews & Data Points
* Read: Viewing Courses & Statistics
* Updating: Overall Course Statistics & Course Ratings
* Deletion: Downvoted Reviews & Account Termination

#### API Details 
We are creating an in-house API that will act as an intermediary between our database and interface. It will deliver a user response from the server (receiving a request) and send a response from the server back to the user, which will appear in our interface. The following section details our API endpoints.

##### API Endpoints
* (GET) /: Gets static HTML and client-side javascript from the public folder and relays it to the user.
* (POST) /account/create: sends data from the user's input (new account information such as email, name, and password) to the server and creates a new account to access the site.
* (GET) /account/login: retrieves users' login information from the server for them to access the site.
* (PUT) /account/update: updates user's existing account information.
* (DELETE) /account/delete: deletes user's account.
* (GET) /courses: retrieves course information from the server; this information comes from a list of course objects as outlined below.
* (POST) /courses/review/new: sends data from user's input (new review written by the user) to the server and creates a new review for course.
* (POST) /courses/review/vote: sends data from user's input (new vote from the user) to server and creates new vote for the course.
* (GET) /courses/reviews: retrieves the course reviews from the server; this data comes as a list of review objects as outlined below.
* (POST) /courses/survey/new: sends data from user's input (new survey filled by the user) to server.

### Database <br /> 
#### Database: account
The account database has the collection info, which stores user information such as the user's username(verified UMass email) and password.

##### Collection: info
* info document <br />
{ <br />
  "_id": \<ObjectId1>\, <br />
  "username": String, //email for user <br />
  "password": String, //password for user <br />
}


#### Database: course
The course database has two collections: courses and reviews. The courses collection contains information on the course as well as metrics for the course. The reviews collection holds information on each review for each course.

##### Collection: courses
*  courses document <br />
{ <br />
  "_id": \<ObjectId1>\,<br />
  "course_name": String, //the name of course <br />
  "course_description": String, //description for course <br />
  "credits": Number, //the number of credits for course <br />
  "course_homepage": String, //url of course homepage <br />
  "professors": String[], //professors for course <br />
  "number_reviews": Integer, //number of reviews for course <br />
  "number_ratings": Integer, //number of ratings for course <br />
  "overall_difficulty": Integer, //percentage of difficulty for course <br />
  "overall_rating": Integer, //percentage of overall rating for course <br />
  "course_criteria": Integer[], //course level and which requirements course fulfills <br />
  "enjoyed_course": Integer, //percentage of enjoyment for course <br />
}

##### Collection: reviews
* reviews document <br />
{ <br />
  "_id": \<ObjectId1>\,<br />
  "course_code": Integer, //the number associated with course<br />
  "user_id": String, //unique hash for each user <br />
  "uid": String, //unique hash for each review <br />
  "comment": String, //review written by user <br />
  "upvotes": Integer, //number of upvotes <br />
  "downvotes": Integer, //number of downvotes <br />
  "voted": \<ObjectVote>\, //keep track of which users have voted <br />
}

### URL Routes/Mappings <br />
A final up-to-date table of all the URL routes that your application supports and a short description of what those routes are used for. You should also indicate any authentication and permissions on those routes.
### Authentication/Authorization <br />
A final up-to-date description of how users are authenticated and any permissions for specific users (if any) that you used in your application. You should mention how they relate to which UI views are accessible.
### Division of Labor <br /> 
A breakdown of the division of labor for each team member — that is, saying who did what, for the entire project. Remember that everyone is expected to contribute roughly equally to each phase of the project. We expect to see similar numbers and kinds of GitHub commits by each student.
### Conclusion <br /> 
A conclusion describing your team’s experience in working on this project. This should include what you learned through the design and implementation process, the difficulties you encountered, what your team would have liked to know before starting the project that would have helped you later, and any other technical hurdles that your team encountered.

<hr /> <br />
  
### Video Demo ___ / 10

### General ___ / 25 pts
* Authentication (15 pts)
  * New users can create account through register page (5 pts)
  * User can login with their credentials (5 pts)
  * Certain pages (courses page, account settings, ratings page, etc.) are only accessible if user is logged in. (5 pts)
* Page routing (5 pts)
* Linting/Code style (5 pts)

### Courses Page ___ / 25 pts
* Users can view courses (shown as cards), their metrics (overall rating, enjoyed the course, and overall difficulty), and the number of reviews and ratings each course has. (10 pts)
* Users can expand course card to read course descriptions, reviews, etc. (5 pts)
* Once the course card is expanded, users can scroll to the course's reviews and either downvote or upvote the review (5 pts)
* Users can click on "rate or review this class," which will take them to the course's rating page. (5 pts)

### Ratings Page ___ / 10 
* Users can fill each field in the ratings page and submit it (5 pts)
* Users can write a review and submit it. (5 pts)
  * The review will then populate in the course card that it was written for (on the courses page). 

### Account Settings (My Account page) ___ / 10
* Users can update their passwords and save the changes. (5 pts)
* Users can delete their account (5 pts)

### CRUD ___ / 20 
#### CREATE ___ / 5
* User (2.5 pts)
  * Username (email)
  * Password
* Review (2.5 pts)
  * Contains review data for each course
  * Number of upvotes and downvotes that a specific review recieves 

#### READ ___ / 5
* Courses (2.5 pts)
  * Contains all course information such as description, name, professors, etc.
* Review (2.5 pts)
  * Review populates on the course card that it corresponds with relevant review information 

#### UPDATE ___ / 5
* Account Password (2.5 pts)
  * User can update account password
* Review Upvote and Downvote (2.5 pts)
  * User can upvote or downvote a review and it will appear on the interface

#### DELETE ___ / 5
* Account (2.5 pts)
  * Users can delete their account 
* Review (2.5 pts)
  * A review is deleted if it recieves enough downvotes 
