# Hospice

> A mini hospital management system app which models javascript prototype object programming to implement inheritance, encapsulation and over-riding. This is created to simply illustrate how prototyping works under the hood in javascript and understand how to use it in modelling real life objects or behaviour of things.

## Table Of Contents

- [General info](#general-info)

- [Technologies](#technologies)

- [Setup](#setup)

- [Features](#features)

- [Inspiration](#inspiration)

## General Info

This project is a simple hospital management app.

## Technologies

Project is created with:

- ES5 Prototype Oriented Programming.
- Javascript.
- Jest version: 24.7.1 for testing purposes.

## Setup

To run this project, install it locally using npm:

```
$ cd ../staff.js

$ npm i -y

Add Jest as a dev dependency :

$ npm i --save jest

Inside your package.json file change scripts test to jest:

"scripts": {
    "test": "jest "
  },

$ npm test

```

## Features

- Create a new Staff.
- Read a single Staff by his ID.
- Read all Staff (\*)
- Update the details of a Staff.
- Delete Staff(\*)
- Delete all Staff (\*)
- A unique id for all Staff and Operations.
- Create a new operation
- Read all the operation(\*)
- Read one operation by its ID(\*)
- Update operation details(\*)
- Delete one opeartion(\*)
- Delete all operations(\*)
- A mock database to handle data storage.
- All methods marked (\*) can be carried out by an DOCTOR staff alone.

> Properties and methods of each object

Staff Object contains the following properties:  

- Name.
- Email.
- Password.
- ID (Auto increment).
***
Operations Object contains the following properties:   
- Staff ID.
- Time of activity.
-  Date of Activity.
- ID (Auto increment).
- Activities in the Opreations.
***

## Inspiration

This project was insipred by the desire to help new beginners who are new to Javascript to get a basic understanding of the concept of Prototype Oriented Programmingin javascript as against the more popular Object Oriented Programming of other languages.

While learning how POP works in Javascript, there were so many vague concepts, big words, and analogies that were so verbose, thus was so difficult to grasp and there were not much real world case usage that fully implemented or explain the whole concept of how inheritance, encapsulation and the idea of constructors and methods truly work together.

In this app, i wish to explain in its simplest terms and forms the entire concept of Prototypal inheritance, encapsulation and constructors in Javascript by building this simple hospital management system that has staff, doctors and operations they can perform and the ones that can be hidden from each other.

We will fully be testing each functionality and its implementations as we build the project.
