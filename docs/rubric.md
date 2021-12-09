# Grading Rubric
This rubric outlines how our website, [***courseoverflow***](https://courseoverflow.herokuapp.com/), satisfies the final project specification.

## Courseoverflow

Courseoverflow is designed to be an information repository on courses computer science courses at UMass Amherst. **Users with valid http://umass.edu/ email addresses** will be able to create accounts where they can rate courses, write anonymous course reviews, and view detailed statistics for each course in the computer science department; the service is only availible for UMass Amherst students. The rankings would be across a couple of dimensions, users could fill in data including average number of hours spent per week, record their received grades anonymously, overall difficulty, and more. Users could also write reviews and upvote/downvote other reviews. There are two similar alternatives, from our research: Rate my Professor, and CICS course guides. We differ significantly from Rate my Professor which is just professor specific, only tracks two metrics, and has no system for statistics, workload, or sorting reviews. For the CICS course guides, we actually scrape them to display on each course course card.

### Pages
- *Landing Page*<br> A simple, stylish landing page displaying some screenshots of our site and how it works. In addition, there is buttons for logging in and registering an account with the site.  
- *About Page*<br> A small page dedicated to what the site is and its creators. 
- *Login Page*<br> A login page for user's with accounts.
- *Register Page*<br> A page where new users can register an account
- *Courses Page*<br> A page with all UMass Amherst computer science courses along with their associated metrics and reviews; the main functionality of our website. 
- *Account Settings Page*<br> A page where a user can view their account information, change their password, and delete their account. 
- *Ratings Page*<br> A course specific page that solicits metrics and text reviews for a course.
- *Logout Page*<br> A simple logout page that is displayed for two seconds after logging out of an account.


### Grading Breakdown

#### General ___ / 25 pts
* Authentication
  * New users can create account through register page
  * User can login with their credentials 
  * Certain pages (courses page, account settings, ratings page, etc.) are only accessible if user is logged in. 
* Page routing 
* Linting/Code style

#### Courses Page ___ / 25 pts
* Users can view courses (shown as cards), their metrics (overall rating, enjoyed course, and overall difficulty), and the number of reviews and ratings each course has.
* Users can expand course card in order to read course description, reviews, etc.
* Once course card is expanded, users can scroll to the course's reviews and either downvote or upvote the review
* Users can click on "rate or review this class" which will take them to the course's rating page. 

#### Ratings Page ___ / 20 
* Users can fill each field in the ratings page and submit it
* Users can write a review and submit it. 
  * The review will then populate in the course card that it was written for (on courses page). 

#### Account Settings (My Account page) ___ / 10
* Users can update their password and save the changes. 
* Users can delete their account 

#### CRUD ___ / 20 
##### CREATE ___ / 5
* User
  * Username (email)
  * Password
* Review 
  * Contains review data for each course
  * Number of upvotes and downvotes that a specific review recieves 

##### READ ___ / 5
* Courses 
  * Contains all course information such as description, name, professors, etc.
* Review
  * Review populates on the course card that it corresponds with relevant review information 

##### UPDATE ___ / 5
* Account Password 
  * User can update account password
* Review Upvote and Downvote
  * User can upvote or downvote a review and it will appear on the interface

##### DELETE ___ / 5
* Account 
  * Users can delete their account 
* Review
  * A review is deleted if it recieves enough downvotes 
