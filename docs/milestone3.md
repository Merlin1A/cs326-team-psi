# Milestone 3

Team Name: *Team Psi*

Appication Name: *Course Overflow*

## Team Overview
* [Jesse Brookins](https://github.com/Merlin1A)
* [Johno Pomerat](https://github.com/sperek27)
* [Lynn Li](https://github.com/lynnli0)

## Division of Labor
* [Jesse Brookins](https://github.com/Merlin1A)
insert labor
* [Johno Pomerat](https://github.com/sperek27)
insert labor
* [Lynn Li](https://github.com/lynnli0)
insert labor

## Part 1: Database Implementation

### Database: account
The account database has the collection info which stores user information such as the user's username(verified umass email) and password. 

##### Collection: info
* info document <br />
{ <br />
  "_id": \<ObjectId1>\, <br />
  "username": String, //email for user <br />
  "password": String, //password for user <br />
}


### Database: course
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


## Part 3: Deployment

##### Heroku Site Deployment:
https://courseoverflow.herokuapp.com