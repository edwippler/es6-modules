console.log('Hello World, from a module!');

// NOTE: will log out both exports from module1
// import {projectId as id, projectName } from 'module1.js';
// console.log(`${projectName} has id: ${projectId}`);

// NOTE: will log out the default export
// import someValue from 'module1.js';
// console.log(someValue);

// NOTE: will log out as an object w/ all exports due to * and alias
import * as values from 'module1.js';
console.log(values);

console.log('ending in base');
