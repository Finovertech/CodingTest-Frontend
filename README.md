# CodingTest - Front End

## Overview

Product has asked for a web app to display the data available at http://jsonplaceholder.typicode.com/.

A developer began building the new app, but suddenly got very sick. This app should be finished quickly (in about 1 hour) BUT ALSO WITH QUALITY.

We've given you a basic starter project using __[React](https://facebook.github.io/react/)__. Please write a web application that meets the requirements detailed in the next section.

- Your solution will be examined for good design (both code and visuals) and usability.
- When done, email a zip file to [careers@finovertech.com](mailto:careers@finovertech.com) containing your code / solution.

_Note: Running the app should only involve the commands `npm install` and `npm start`, as per convention_.

## App Requirements from the Product owner

- Should be responsive (so it works on large and small screens)
- Anything else you'd like to add to make the app highly attractive and user-friendly!
- Test files can end in `*.test.js` or `*.spec.js` anywhere in the `/src` folder

*Design, implement, and test* each of the following features:

### Feature 1. Render a Post and its Comments

The user should be able to click on a Post in the list, and go to a page which displays:

- The Post (title, author, time, body)
- All its Comments (name, email, body)

You can use a router library other than `react-router` if you prefer. Must be URL (or hash) navigable, i.e. "SPA".

### Feature 2. Data Statistics

Compute and display a page of statistics for the following data:

- total number of posts per user
- total number of comments per user
- word count for all: Post titles; and Post bodies

You can use any open source charting library, basic HTML tables, or whatever else you'd prefer.

## How HyperJar evaluates your submission

1. We launch your application with `npm install` and `npm start`.

2. Your application is tested to prove that all requirements are met.

3. As a group, we assess the overall flow of your application, looking at both structural and visual items:

    - layout, navigation, colour theme(s), spacing/padding, etc.
    - Note: this is done as a group since we understand that everyone has a different opinion as to what looks and works good and what doesn't

4. Your code is evaluated by one or more developers here for:

    - how your code is written and structured
    - efficient use of any libs, and code bundle size
    - es6/es7 code syntax
    - best practices of the framework
