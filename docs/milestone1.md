# Milestone 1

Team Name: *Team Psi*

Application Name: *Course Overflow*

## Team Overview
* [Jesse Brookins](https://github.com/Merlin1A)
* [Johno Pomerat](https://github.com/sperek27)
* [Lynn Li](https://github.com/lynnli0)

## Innovative Idea
Course Overflow is designed to be an information repository on courses at UMass. Users with valid http://umass.edu/ email addresses will be able to create accounts where they can rate courses, write anonymous course reviews, and view detailed statistics for each course in the computer science department. The rankings would be across a couple of dimensions. Users could fill in data, including an average number of hours spent per week, record their received grades anonymously, the overall difficulty, and more. Users could also write reviews and upvote/downvote other reviews. There are two similar alternatives from our research: Rate my Professor and CICS course guides. We differ significantly from Rate my Professor, which is just professor-specific, only tracks two metrics, and has no statistics, workload, or sorting reviews system. The CICS course guides are generally uninformative, detailed by short paragraph-sized blurbs that are often outdated.

## Division of Labor
* [Jesse Brookins](https://github.com/Merlin1A)
Created the login page, helped design and iterate the page layout. Assisted with numerous page features.
* [Johno Pomerat](https://github.com/sperek27)
Built the initial wireframe using bootstrap collaborated with Jesse and Lynn on designing the page layout. Iterated on the wireframe and assisted with everything else
* [Lynn Li](https://github.com/lynnli0)
Designed and created the initial layout/wireframe using Whimiscal with Jesse and Johno. Drafted and create the templates for settings.html, createacc.html, and ratings.html, as well as the content in the card expansion for index.html.

## Part 0: Data Interactions

#### CRUD
* Creation: User Accounts, Reviews & Data Points
* Read: Viewing Courses & Statistics
* Updating: Overall Course Statistics & Course Ratings
* Deletion: Downvoted Reviews & Account Termination

The website will have a couple of pages. One for viewing classes, with different ways of sorting them, i.e. by order in which you have to take them, by overall rating, by specific ratings, etc. For each course, there will also be a page full of stats, reviews, and other relevant information for the course. On each of these pages, there will be a button to have a popup to write a review and add a datapoint. And on the course reviews, once you have added a data point, you can write a review and upvote/downvote other reviews. Finally, there will be pages for creating an account and login. We will have database storing various pieces of information. This database would support creation through user accounts, data points, and reviews. It would support read via viewing courses, statistics, etc. It would support updating through updating upvote counts and overall course statistics with every additional datapoint. Finally, it would support deletion as once reviews receive a sufficent number of downvotes they will be deleted. Additionally, users will have the ability to delete their account.

## Part 1: Data Interaction 
#### To see complete wireframe, click [here](https://whimsical.com/milestone-1-98mvoPfqyD4uwHfWMFg2bq)
* The first screen the users will see is the welcome page, where users will be prompted to either log in or create an account.

<img width="815" alt="login" src="https://user-images.githubusercontent.com/38598996/137637357-ce0369c4-e4cd-43ac-b2ff-dbb6a2ab76ea.png">)
<img width="815" alt="account-creation" src="https://user-images.githubusercontent.com/38598996/137637364-05d97b45-37bf-4357-8c3f-b08301c987e6.png"><br>

* Once the user logs in or creates an account, they will be redirected to the homepage, which consists of course rankings. They can filter through the courses and click on each card to get more information. They can also click the card to either rate or review a course.
<img width="815" alt="ranking-homepage" src="https://user-images.githubusercontent.com/38598996/137637415-cee97f45-4f7d-4479-bd37-5d384e025554.png">

* Upon clicking a card, it will expand to show information about the course and the course's ratings and reviews. Users can also click on buttons to get the course website or contact the instructor.
<img width="815" alt="course-info" src="https://user-images.githubusercontent.com/38598996/137637584-5150ffe1-fe7d-4669-a1cb-1455a42705cc.png">



* If a user wants to change their account information, such as update their email or change their password, they can do so by clicking the account button on the navbar.
<img width="815" alt="account-settings" src="https://user-images.githubusercontent.com/38598996/137637616-035aa596-3aec-4ac8-bb49-7ac2ffe28db7.png">

## Part 2: HTML Pages
* login page
<img width="815" alt="login-page" src="https://user-images.githubusercontent.com/38598996/138575530-95e3aaf7-08ef-416c-a27d-329b8c45ae4d.png">

* create an account/sign-up page
<img width="815" alt="account-create" src="https://user-images.githubusercontent.com/38598996/138575602-d2204ac1-07d3-4859-b638-93561dce308a.png">

* homepage with rankings
<img width="815" alt="rankings" src="https://user-images.githubusercontent.com/38598996/138575546-55bcf0fb-f97a-4874-96c3-09c4d9dc91e8.png">

* rankings card expanded
<img width="815" alt="expanded-ranking" src="https://user-images.githubusercontent.com/38598996/138575567-9a899305-071e-4d93-a8db-78e19e152997.png">

* rating page 
<img width="815" alt="ratings" src="https://user-images.githubusercontent.com/38598996/138575580-a613cf70-e098-4313-ae74-663868b39aa2.png">


* account settings
<img width="815" alt="Screen Shot 2021-10-23 at 8 43 29 PM" src="https://user-images.githubusercontent.com/38598996/138575635-77436e8d-a14e-459e-982f-3846b5d6aabb.png">

