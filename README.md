# YelpCamp

## Description
    YelpCamp is a web application with RESTful Routing and NoSql MongoDB database that allows you to sign up and create a campground posts.

    It basicly allows you to share posts that includes campgrounds name, picture, comment and the price of one night. Or to see others post.

## Features

* Authentication
  
  * User login with username and password

* Authorization

  * One cannot manage posts without being authenticated

  * One cannot edit or delete posts and comments created by other users

* Manage campground posts with basic functionalities

  * Create, edit and delete posts and comments

  * Upload campground photos

  * Search existing campgrounds

* Flash messages responding to users' interaction with the app

* Responsive web design

## Getting Started

> This app contains API secrets and passwords that have been hidden deliberately, so the app cannot be run with its features on your local machine. However, feel free to clone this repository if necessary.

### Clone or download this repository

```sh
git clone https://github.com/mrcn04/yelp-camp.git
```

### Install dependencies

```sh
npm install
```

### To run locally

Make sure you have [Node.js](http://nodejs.org/) and [MongoDB](https://www.mongodb.com/) and all other dependencies installed.

```sh
$ git clone https://github.com/mrcn04/Sync-Youtube.git
$ cd yelp-camp
$ npm install
$ node app.js
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### To deploy online

Make sure you have [Heroku CLI](https://cli.heroku.com/) installed. 

```
$ heroku create
$ git push heroku master
$ heroku open
```

or


[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Built with

### Frontend

* Bootstrap
* EJS

### Backend

* Express
* Body-parser
* Connect-flash
* Express-session
* Method-override
* Mongoose
* MongoDB
* Nodemon
* Passport.js
* Passport-local
* Passport-local-mongoose

## Documentation

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Getting Started with MongoDB](https://docs.mongodb.com/?_ga=2.87418840.1746570759.1545944867-1363673920.1539882817)
-[RESTful Routing](https://medium.com/@atingenkay/restful-routes-what-are-they-8fe221521bb)