# Movie Forum Capstone

My Lego® Inventory was created by Teresa Bacigalupi (a Lego® Technic fan) using the following tools:

## Working Prototype
You can access a working prototype of the node app here: https://movie-forum-capstone-server.herokuapp.com/ 

You can access a working prototype of the react app here:

## User Stories
This app is for two types of users; a visitor, and a logged-in user

#### Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

#### Sign Up
* as a visitor
* I want to register to use this app
* so I can create a personal Lego® inventory

### Wireframe
Landing/Login Page |
:-------------------------:|
![Landing/Login Page](/github-images/wireframes/Landing-Page.png)  |

Registration 
!https://repl.it/@ChristianGeorge/Capstone-Login-Wireframe
User enters username and confirms password -> if criteria is not met an alert is generated -> once criteria is met user is directed to homepage

Login
https://repl.it/@ChristianGeorge/Capstone-Login
User logs in with username and password -> user is notified if criteria is incorrect -> user can click a link to generate an email to reset password -> once user is logged in, user is directed to homepage

HomePage
https://repl.it/@ChristianGeorge/Capstone-Homepage
User is able to see nav bar at top, trending movies/tv, and the search section below -> user can click on the trending movies to be directed to posts on that topic -> user can use search feature to search for specific media

Create Post
https://repl.it/@ChristianGeorge/CumbersomeNutritiousLinkedlist
User is able to create a post wiht a chosen title and content -> user can submit that post to be viewed on the homepage and in relation to other topics

Comment on Post
https://repl.it/@ChristianGeorge/Capstone-Comment-on-post
Users are able to comment on the post of other users, or on their own posts

## Screenshots
Landing/Login Page |
:-------------------------:|
![Landing Page](/github-images/login-page.png)  | 

## Functionality
The app's functionality includes:
Search feature looks for user's number (XXXXX) and possible Rebrickable number (XXXXX-1)

* Every User has the ability to create an account that stores information unique to them
* User can Add Entries, Update Entries, and Delete Entries
* User can sort entries by: Date & Type (Read, Seen, Performed)

## Business Objects (database structure)
* User (collection)
    * ID
    * Email
    * Password
    * First name
    * Last name
* Movie
    * ID
    * User ID
    * Movie title
    * Release date
    * Average rating
    * Genre
    * Image
* Posts
    * ID
    * Movie ID
    * Post title
    * Post content
* Comments
    * ID
    * Post ID
    * Comment content


## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, jQuery
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, MongoDB, Mongoose
* Development Environment: Heroku, mLab, Robo 3T

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Wishlist (from the inventory page part details);
        (1) see how many parts there are in the Wishlist

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test
