# Dungeon Crawler

#### _A minimalist top down dungeon crawler_, 00/00/2022_

#### By _**Tristen Everett**_

## Description



### Diagram

* 

## Setup/Installation Requirements

To use this program you will need to set up a Firebase database which will require a Firebase account (tied to google as the same account).  Webpage Setup instructions require use of [nodeJS](https://nodejs.org/).

### Database Setup

1. Log in to [Firebase](https://firebase.google.com/)
2. Navigate to [Firebase Console](https://console.firebase.google.com/)
3. Select _Add Project_ and navigate through creation of your project until arriving at __Project Overview__
4. Select _Firestore Database_ from the __Build__ menu
5. Select _Create Database_ then _Start in test mode_ and pick whatever Cloud Firestore location works best for your usage
   * Database will stop functioning after 30 days unless connection rules are updated
   * [Read more](https://firebase.google.com/docs/firestore/security/get-started?authuser=0&hl=en) and update security rules as you feel is appropriate
6. Navigate back to __Project Overview__ and select _</>_ (web)
7. Input an App nickname such as "dungeon-crawler" and select _Register app_
8. Select _Continue to console_
9. Select _Project settings_ and navigate to __Your apps__ to find your `firebaseConfig` information for use in setting up webpage following instructions below

### Webpage Setup

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this Repo
2. Run `npm install` from within the root directory of the cloned project
3. Make sure you have followed [above instructions to set up database](#database-setup)
4. Set up your `.env` file
   1. Create a new file named `.env` in the same level as the `template.env`
   2. Copy the data from within [template.env](template.env) into your new `.env` 
   3. Replace dummy values in the quotation marks with the information found in your database's `firebaseConfig`
5. Run `npm start` from within the root directory of the cloned project
6. The webpage should start automatically in your default browser. If it doesn't go to http://localhost:3000 in your preferred browser

## Technologies Used

* [Create React App](https://github.com/facebook/create-react-app)
* Redux
* [Firebase](https://firebase.google.com/)
* Firestore
* React-Redux
* React-Router

### License

This software is licensed under the MIT license

Copyright (c) 2022 **_Tristen Everett_**