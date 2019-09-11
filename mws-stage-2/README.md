# MWS Stage 2 - Dynamic & Offline Capable Web Apps

## Goal of the Project
This project is used to create a Progressive Web Application - where the restaurants and 
the reviews of each restaurant are cached in the client’s browser. Using PWA we giving a 
better offline experience. 

The infrastructure is provided to use through a [node development server](https://github.com/udacity/mws-restaurant-stage-2) and an API that is ready to provide requests to the server. Core functionality won’t change - however we will add IndexDB along with Fetch API to meet the PWA requirements. 

All dependencies are found in package.json. Gulp runner is our task manager for this app.

## Project Requirements
* Use server data instead of local memory.
* Use IndexedDB to cache JSON responses.
* Minimum performance requirements using [Lighthouse](https://developers.google.com/web/tools/lighthouse/) benchmarks for Progressive Web Apps.
  > Performance: 70 or better
  > Progressive Web App: 90 or better
  > Accessibility: 90 or better
  
  My app's scores: 
  > Performance: 95
  > Progressive Web App: 90 or better
  > Accessibility: 98 

## Official Styleguide

This code adheres to the following guidelines:
- [Udacity's HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity's CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity's JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Udacity's Git Style Guide](https://udacity.github.io/git-styleguide/)


## Getting Started

Installing dependencies

```
npm install
cd restaurants-api
npm install
```

Starting the backend server

```
npm run backend
```

Starting the front-end server

```
#development server
gulp serve

#Production server
gulp serve-dist
```

### Prerequisites

[Node JS](https://nodejs.org/en/)

## Built With

- [Leaflet](https://leafletjs.com/)
- [IDB Promised](https://github.com/jakearchibald/idb)


## Where can I learn more?
Follow the awesome [Udacity Mobile Web Specialist Nanodegree](https://www.udacity.com/course/mobile-web-specialist-nanodegree--nd024)!

## Author
Follow me**[thesparrow](https://github.com/thesparrow/)** and my work! Appreciate any feedback as I am always growing as a developer.

