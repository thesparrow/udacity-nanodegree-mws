# MWS Stage 2 - Dynamic & Offline Capable Web Apps

## Goal of the Project
This project is used to create a Progressive Web Application - where the restaurants and 
the reviews of the restaurant are cached in the client’s browser. Using PWA we giving a 
better offline experience. 

The infrastructure is provided to use through a [node development server](https://github.com/udacity/mws-restaurant-stage-2) and an API that is ready to provide requests to the server. Core functionality won’t change - however we will add IndexDB along with Fetch API to meet the PWA requirements. 

All dependencies are found in package.json. Gulp runner is our task manager for this app.

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

## Author

**[Me](https://github.com/thesparrow/)**
