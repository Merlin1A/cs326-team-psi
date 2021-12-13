
### Heroku Deployment
- https://courseoverflow.herokuapp.com
- https://courseoverflow.app

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
* Landing/Homepage Page <br />
The Landing/Homepage page allows current users to login to the site and for prospective users, they are able to read about the site's features beforehand and register for an account.
  * first half of landing/homepage
  * <img width="1440" alt="landing" src="https://user-images.githubusercontent.com/38598996/145733793-c20ecf8c-a97e-4238-a9ab-d32483c7b6b3.png">
  * second half of landing/homepage
  * <img width="1440" alt="landing-cont" src="https://user-images.githubusercontent.com/38598996/145733792-94886ad1-331a-4da8-94b9-f05a5c0d656e.png">
* Sign-up Page <br />
The Sign-up page allows for UMass students with valid UMass emails to sign up for an account. After submitting the registration form, the page will redirect to another page for email verification. <br />
* <img width="1440" alt="account-creation" src="https://user-images.githubusercontent.com/38598996/145733776-153c8bd3-47bc-4b0e-b660-28a997a803f3.png">
* Verification Page <br />
The Verification Page will verify whether of not the user's email is valid. If it is, then the user should be able to recieve a verification code in their inbox and use it to verify themsleves on the verification page.  <br />
* <img width="1425" alt="email-verification" src="https://user-images.githubusercontent.com/38598996/145733789-80e21a19-fb67-4c53-b2b0-6a93673fbe08.png">
* Failed Verification Page <br />
The Failed Verification Page will verify whether of not the user's email is valid. If it is, then the user should be able to recieve a verification code in their inbox and use it to verify themsleves on the verification page. 
* <img width="1440" alt="failed-ver" src="https://user-images.githubusercontent.com/38598996/145733790-9a74173d-89f4-4ad8-bcab-2a8ea120118e.png">
* Login Page <br />
The Login Page allows for users to login and use their credentials in order to access the entire site. If the email or password do not match or an account cannot be found, it will redirect to the invalid credentials page. 
* <img width="1440" alt="login" src="https://user-images.githubusercontent.com/38598996/145733794-f49c22ba-28c3-4ade-b2e8-6dfaaf3bd603.png">
* Invalid Credentials Page <br />
If the user input wrong credentials in the login form or an account cannot be found, this page will appear and then redirect the user back to the login page.
* <img width="1440" alt="invalid-cred" src="https://user-images.githubusercontent.com/38598996/145733791-d06029f0-4fb5-4def-95f8-12c45406ebfc.png">
* Courses Page <br />
The Courses Page contains content from all Computer Science courses from CICS (as scraped from the CICS Course Guide site). Each course is a card and the user can click on the "Click to see more" button in order to view course information, metrics, and reviews. The user can also upvote or downvote reviews and if the review recieves enough downvotes, it will be deleted. The user can also click on the "Rate or review this class" button which will redirect them to the Ratings page where they can rate/review the course. 
   * Course Cards
   * <img width="1440" alt="course_cards" src="https://user-images.githubusercontent.com/38598996/145733784-1419be01-c466-428b-9c58-c3ace5a051c3.png">
   * Course Card Expanded
   * <img width="1440" alt="card-expansion" src="https://user-images.githubusercontent.com/38598996/145733781-7cfa98a9-d502-40bf-bbe4-257b9cd9c911.png">
* Ratings Page <br />
The Ratings Page contains two forms: 1) Rating form and 2) Review form. The user can either fill only one of the two forms or both. When the user clicks submit, the information will be updated in the card that the rating/review belongs to.
  * Rating Form
  * <img width="1440" alt="ratings-pt1" src="https://user-images.githubusercontent.com/38598996/145733801-54144b69-820d-4c36-a1e2-e3300893f0bb.png">
  * Review Form
  * <img width="1440" alt="ratings-pt2" src="https://user-images.githubusercontent.com/38598996/145733802-382877c7-dd59-427d-b15d-26044441734f.png">
* Account Page <br />
The Account Page allows for users to modify their account settings, such as password, and delete their account. If they delete their account, then it will redirect them to the Login page.
* <img width="1440" alt="account" src="https://user-images.githubusercontent.com/38598996/145733779-14d139f9-4c1a-4405-b832-ce40cabe169c.png">
* Logout Page <br />
When the user clicks on the "Log Out" button, it will redirect them to this logout page where it alerts the user that they have been successfully logged out and after 5 seconds, it will then redirect to the landing/homepage page.
* <img width="1440" alt="logout" src="https://user-images.githubusercontent.com/38598996/145733795-ad38817c-a71b-4903-bd72-764eb017261c.png">
* Not Logged In Page
If the user is not logged into the site and they try to access certain views without credentials, it will redirect them to the landing/homepage page.
* <img width="1440" alt="not-logged" src="https://user-images.githubusercontent.com/38598996/145733798-fcaa136f-6fee-4393-b66e-485cb95490da.png">

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
The account database has two collections: info and emailCodes. The info collection contains a user account's general information. The emailCodes collection hosts verification codes for accounts pending verification; the timestamp is used to dispose of old codes.

##### Collection: info
* info document <br />
{ <br />
  "_id": \<ObjectId1>\, <br />
  "username": String, //email for user <br />
  "hash": String, //hash from user's password and salt <br />
  "salt": String, //salt for password hashing <br />
  "status": String, //whether a user is verified or unverified <br />
}

##### Collection: emailCodes
* emailCodes document <br />
{ <br />
  "_id": \<ObjectId1>\, <br />
  "email": String, //email for user <br />
  "code": Int32, //the code emailed to the user for verification <br />
  "timestamp": Double, //time elapsed since unix epoch <br />
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
* '/' (no path) - Leads to the Homepage/Landing page. No authentication is necessary in order to access it. Users can either login or sign up which will redirect them to the corresponding page.
* '/landing' - Leads to the Homepage/Landing page as well. Similar to the '/' route. No authentication required.
* '/main' - Leads to the courses page which has all course information. Users can rate or review a course, and in the navbar, users can either logout or go to account settings. Authentication is required. 
* '/logoutmsg' - Leads to the Logout page when the user clicks logout. It will then redirect to the Homepage/Landing page in 5 seconds. No authentication necessary.
* '/logout' - Leads to the Logout page as well. Similar to '/logoutmsg'. No authentication required.
* '/nan' - Leads to a Not Logged In page if the user tries to access a permission-specific page without correct permissions/credentials. After 5 seconds, it will redirect to the Homepage/Landing page. No authentication required.
* '/login' - Leads to the Login page where users can login to access the site. If the user is successful, then it will load to the courses page. If the user is unsuccessful, then it will lead them to the Invalid Credentials page which will redirect back to the Login page after 5 seconds. No authentication required.
* '/failedLogin' - Leads to the Invalid Credentials page. Notifies the user that their credentials are incorrect and then redirects to the Login page. No authentication required.
* '/account' - Leads to the Account page where users can modify their password or delete their account. Authentication required. 
* '/register' - Leads to the Sign-up page where users can create an account. It will then redirect to the Verification page once the user submits the registration form. No authentication required.
* '/verify' - Leads to the Failed Verification Page which alerts the user that information given on the previous Verification Page was incorrect. Redirects them to the Verification page. No authentication required.
* '/failedverify' - Leads to the Verification Page. User must verify their email and give a verification code in the form. If the information given is incorrect, it will redirect to the Failed Validation Page. No authentication required.
* '/ratings' - Leads to the Ratings page. User can create a new review or rating and submit it. It will then update in the corresponding course card. Authentication required. 

### Authentication/Authorization <br />
All base authentication code is in */server/accounts.js*

Our authentication is built using passport.js. We set up a local strategy that validates a user's credentials and checks if the account is verified; unverified accounts have no permisions, but we store their data until verification. We store the user's account information in our info collection within our Accounts database: we use the collection to store documents that contain a user's email, password hash, associated salt, and whether the account is verified or not. We then have a validatePassword function that queries that collection for the user's information, checking that the computed hash matches the database hash and the account is verified.

From a UI standpoint, our application has two seperate views: unauthenticated and authenticated. The unauthenticated view starts at our landing page at https://courseoverflow.app/ which links to the login and register pages; the login, register, and verification pages, and their associated transition webpages, are all unauthenticated. Once a user makes an account and verifies it, they can access the authenticated views via logging in. All authenticated views show the same information, except the account settings webpage, which is user specific.

To do the above, we use a small middleware function called checkLoggedIn at all authenticated endpoints. That functions then calls a passport function named isAuthenticated which utilizes our passport configuration and database helper functions. It is also important to note that our passport configuration sets the value of res.user to the email address of the account logged in, allowing us to identify an authenticated user with their account; that fact is helpful for allowing the user to change their password, delete their account, rate a course, or doing anything else that requires verified identity.

### Division of Labor <br /> 
* [Jesse Brookins](https://github.com/Merlin1A)
Created the login page, helped design and iterate the page layout. Assisted with numerous page features. Set up the Heroku hosting and auto-deployment. Added logic to programmatically generate the reviews for each course from 'dummy' JSON data and implemented the associated API. Wrote logic for voting functionality and the associated HTML/ stylings. Also collaborated with Johno and Lynn on the API structure and helped implement it. Configured MongoDB. Wrote a large portion of the authentication code, including the passport configuration, login functionality, creating accounts, deleting accounts, and a couple of middleware functions. Created authenticated routing to the user's account page and implemented a few API endpoints.
* [Johno Pomerat](https://github.com/sperek27)
Built the initial wireframe using bootstrap collaborated with Jesse and Lynn on designing the page layout. Iterated on the wireframe and assisted with everything else. Designed and wrote the internal architecture of the dummy server. Created client-side logic to process GET requests to enable dynamic creation of the wireframe pages. Wrote all the logic to render courses dynamically on the landing page. Assisted Jesse and Lynn by fixing bugs and writing documentation. Designed a new data schema for mongo, wrote a script to scrape course data from the UMass website to populate mongo, connected the frontend to the backend by writing both client-side and server-side code to handle the interactions. Implemented all of the course-related interactions between client and server. Redesigned a couple of pages in the frontend to work better with the data in the backend.
* [Lynn Li](https://github.com/lynnli0)
Designed and created the initial layout/wireframe using Whimiscal with Jesse and Johno. Drafted and create the templates for settings.html, createacc.html, and ratings.html, as well as the content in the card expansion for index.html. Helped generate 'dummy' JSON data for the course landing page. Cleaned up the user interface. Implemented validation/alert systems for ratings and account creation upon submission to ensure user data is correct. Collaborated with Jesse and Johno with documentation and API structure. Refined the frontend code and adjusted layouts, such as course cards and additional metrics for each course. Implemented API endpoint to allow users to update their passwords and enforce password alteration functionality between the database and website. Worked on documentation for the final release as well as the previous three milestones with Jesse and Johno. Assisted with routing and additional page layouts for redirecting. Helped with code clean-up by validating HTML forms.
### Conclusion <br /> 
A conclusion describing your team’s experience in working on this project. This should include what you learned through the design and implementation process, the difficulties you encountered, what your team would have liked to know before starting the project that would have helped you later, and any other technical hurdles that your team encountered.

Our experience was pretty straightforward. We used online resources, guided by the information in the lecture, to create a fully functioning web application. When we ran into issues, we consulted documentation, error logs, and web forums. Through the design and implementation process, we got a clear picture of how to create a fully functioning, standalone web application. In terms of difficulties, we found that making html templates, and their associated client-side javscript, was cumbersome and painstaking; javscript rendering engines would have made this a much more clean and productive experience, but they were disallowed. In terms of information we would have wanted to know, the documentation for the final project was always available, so we always did know the relevent project parameters.

Overall, this project was a good lesson on the varying aspects of creating an application on the web.

<hr /> <br />

## Rubric
  
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
  * A review is deleted if it recieves enough downvotes (after 10 downvotes)


## Total: ___ / 100 PTS
