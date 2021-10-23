# Milestone 1

Team Name: *Team Psi*

Appication Name: *Course Overflow*

## Team Overview
* [Jesse Brookins](https://github.com/Merlin1A)
* [Johno Pomerat](https://github.com/sperek27)
* [Lynn Li](https://github.com/lynnli0)

## Innovative Idea
Course Overflow is designed to be an information repository on courses at
UMass. Users with valid http://umass.edu/ email addresses will be able to create
accounts where they can rate courses, write anonymous course reviews, and view detailed
statistics for each course in the computer science department. The rankings
would be across a couple of dimensions, users could fill in data including
average number of hours spent per week, record their received grades
anonymously, overall difficulty, and more. Users could also write reviews and
upvote/downvote other reviews. There are two similar alternatives, from our
research: Rate my Professor, and CICS course guides. We differ significantly
from Rate my Professor which is just professor specific, only tracks two
metrics, and has no system for statistics, workload, or sorting reviews. For
the CICS course guides, they are generally uninformative, detailed by short
paragraph-sized blurbs which are often years outdated.

## Division of Labor
* [Jesse Brookins](https://github.com/Merlin1A)
what I did
* [Johno Pomerat](https://github.com/sperek27)
Built the initial wireframe using bootstrap collaborated with Jesse and Lynn on
designing the page layout as well. Iterated on wireframe and assisted with
everything else
* [Lynn Li](https://github.com/lynnli0)
what I did

## Part 0: Data Interactions

#### CRUD
* Creation: User Accounts, Reviews & Data Points
* Read: Viewing Courses & Statistics
* Updating: Overall Course Statistics & Course Ratings
* Deletion: Downvoted Reviews & Account Termination

The website will have a couple of pages. One for viewing classes, with different ways of sorting them, i.e. by order in which you have to take them, by overall rating, by specific ratings, etc. For each course, there will also be a page full of stats, reviews, and other relevant information for the course. On each of these pages, there will be a button to have a popup to write a review and add a datapoint. And on the course reviews, once you have added a data point, you can write a review and upvote/downvote other reviews. Finally, there will be pages for creating an account and login. We will have database storing various pieces of information. This database would support creation through user accounts, data points, and reviews. It would support read via viewing courses, statistics, etc. It would support updating through updating upvote counts and overall course statistics with every additional datapoint. Finally, it would support deletion as once reviews receive a sufficent number of downvotes they will be deleted. Additionally, users will have the ability to delete their account.

## Part 1: Data Interaction 
#### To see complete wireframe, click [here](https://whimsical.com/milestone-1-98mvoPfqyD4uwHfWMFg2bq)
* The first screen users will see is the welcome page where users will be prompted to either login or create an account.

<img width="815" alt="login" src="https://user-images.githubusercontent.com/38598996/137637357-ce0369c4-e4cd-43ac-b2ff-dbb6a2ab76ea.png">)
<img width="815" alt="account-creation" src="https://user-images.githubusercontent.com/38598996/137637364-05d97b45-37bf-4357-8c3f-b08301c987e6.png"><br>

* Once the user either logs in or creates an account, they will be redirected to the homepage which consists of course rankings. They can filter through the courses and click on each card to get more information. They can also click the card to either rate or review a course.
<img width="815" alt="ranking-homepage" src="https://user-images.githubusercontent.com/38598996/137637415-cee97f45-4f7d-4479-bd37-5d384e025554.png">

* Upon clicking a card, it will expand to show information about the course as well as the course's ratings and reviews. Users will also be able to click on buttons to get the course website or contact the instructor. 
<img width="815" alt="course-info" src="https://user-images.githubusercontent.com/38598996/137637584-5150ffe1-fe7d-4669-a1cb-1455a42705cc.png">



* If a user wants to change their account information, such as update their email or change their password, they can do so by clicking the account button on the navbar.
<img width="815" alt="account-settings" src="https://user-images.githubusercontent.com/38598996/137637616-035aa596-3aec-4ac8-bb49-7ac2ffe28db7.png">
