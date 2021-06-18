# Would-You-Rather Project

This project is part of the requirements for the React Nanodegree Program, by Udacity. It is also the final assessment project for the React & Redux course.

The project emphasizes using React to build the application and Redux to improve the predictability of the application’s state.

## About Would-You-Rather

**Would-You-Rather project** is a web app that lets the user play the “Would You Rather?” game, by answering a question by chosing either option A or option B. In this app, users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of all users on the leaderboard.

## Getting Started

All you need to get started is here:

- Install all project dependencies with `npm install`
- Start the development server with `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

## Backend Server

To simplify the development process, a backend server was provided to develop against. The provided file [`_DATA.js`](src/_DATA.js) contains all the methods needed to perform necessary operations on the backend:

- [`_getUsers()`](#_getUsers) = Get all of the existing users from the database.
- [`_getQuestions()`](#_getQuestions) = Get all of the existing questions from the database.
- [`_saveQuestion(question)`](#_saveQuestion) = Save the polling question in the database.
- [`_saveQuestionAnswer(object)`](#_saveQuestionAnswer) = Save the answer to a particular polling question in the database.

## Important

Newly created polls will not be accessible at their url because of the way the backend is set up in this application.
