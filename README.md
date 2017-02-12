## About
This is a bare bones seed project for using AngularJS 1.x with TypeScript that I put together for 
personal projects and throw away prototypes, as well as to learn Gulp and some of its supporting plugins
for the AngularJS ecosystem.



## Building the app

	`npm install`
	`npm install gulp -g`
	`gulp'

## Running 

	`gulp watch`
	`npm run lite`
	
## Running unit tests

	`gulp run-tests`

## File management

By default, the build will bundle the various source files and dump them in the following locations.

Compiled TypeScript - `/dist/app.js`

CSS - `/dist/app.css`
 
HTML - `/dist` 
 
Third party JS - `/dist/assets.min.js`

To add or update the files in the bundled assets, see /bundle-config.js


## TODO List

* Add Code Coverage support (possibly using [karma-typescript](https://www.npmjs.com/package/karma-typescript))?

