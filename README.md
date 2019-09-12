# Mobile Web Specialist Nanodegree

My work for the Mobile Web Specialist Nanodegree provided by Udacity and Google.
Thank you for the Grow with Google Developer Nanodegree Scholarship.


# Study Notes 

All of my study notes trascribed. This is all the research and focus done for each stage of the project. 


# Projects 

| Stage 1: 

For Stage 1 of Restaurant Reviews project I will demonstrate my ability to turn a non-mobile ready, non-accessible, and non-pwa project to a fully accessible functionaing Progressivew Web App. I will demonstrate my ability to work with media screens, responsive images, and the service worker

Stage 1 specs:

> Use a map provider from an external API [Mapbox](https://www.mapbox.com/install/)
> Convert the provided site to use a responsive design (no frameworks) 
  > responsive grid-based layout using CSS
  > responsive images
  
> Implement accessibility features in the site HTML
> Add semantics to page elements 
> Add a service worker and make sure it caches all the appropriate components 

| Stage 2

In Stage 2, I will introduce some major optimizations to the web app that can be measured with Google's Ligthouse utilities. Also all of lazy loading will be added for all images at this stage. In this stage, the data server actually fetches the data from the same place as before, data/restaurants.json, but it presents the data as an API instead of just a JSON file.I will demonstrate my ability to utilize IndexDB API in order to 'cache' significant amounts of data on the client side. The caching will be the 'magic' behind having the app work offline. 

Stage 2 specs: 
> Use server data instead of local memory
> Use IndexedDB to cache JSON responses
> Meet the minimum performance requirements (Lighthouse)

<b>Performance in stage 2 </b>

We were required to meet Lighthouse performance benchmarks for progressive web apps:

Performance ≥70
Progressive Web App ≥90
Accessibility ≥90

My app's Lighthouse scores:

Performance 96
Best Practices: 86 
SEO: 100 
Progressive Web App 92
Accessibility 98

Project Structure: 

gulpfile.js: major task runner responsible for 'automagically' reloading the browser, using browsersync when any changes are made in the development environment. In addition, gulp will create a nice solution to compress and minimize images, along with creating production ready scripts (javascript) and css.

manifest.json: basic metadata about the app such as the name and version, and can also specify aspects of the app's functionality, such as background scripts, content scripts, and browser actions.

package.json: dependencies for the app. Have npm or Node installed to use it correctly. 

dist: production environment of the app - not required for this project, but it's out of old habit.

app: "staging" or development environment for the app - all the trial and error happens here


# Take-aways 

Stage 2 I invested a lot of time in creating the gulp scripts which took me at least 3 weeks to get started - for the future - I will focus on the entire scope of the project, instead of trying to optimize components before having something ready. 

Stage 1 I learned a lot from mentors about how flex-grid works. 
