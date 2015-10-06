## Another React Boilerplate

This is a starter template for React projects using <code>ES2015</code>, <code>Webpack</code>, <code>CSS Modules</code> and <code>Redux</code> that I built for some colleagues at AO.com to introduce them to the wonderful world of React. 

The app itself is simple but helps demonstrate: 
* How <code>Redux's</code> interpretation of <code>Flux</code> is used to handle the flow of data through a single store, which performs all logic calculations and broadcasts results out to interested view components.
* How <code>CSS Modules</code> are used to compile SASS and then locally scope the resulting CSS to individual components.
* How <code>Webpack</code> and <code>Babel</code> are used to manage dependencies and transpile the ES2015 React components into ES5 production code. 

The idea is that it's simple enough to demonstrate how React / JSX work and show how things can connect together in a FLUX world, and give them a quick starting point for their own React projects.

### Installation

Download the files or clone the repo and run 
```unix
npm install
```
from the project directory (make sure you have nodemon installed globally too).
```unix
npm install nodemon -g
```
Then type 
```unix
npm start
```
to boot the server and
```unix
webpack
```
to start the build process (when you edit any of the files). View on <code>localhost:1337</code>.

### Licence
MIT
