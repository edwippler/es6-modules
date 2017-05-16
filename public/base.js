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

import {showPlace, updatePlace} from 'module1.js';
showPlace();
updatePlace(); //will reassign the value of showPlace in module1
showPlace();

import tester from 'module2.js';

// import task from 'module2.js';
// task.showId();

// NOTE: extends and supers
class Project {
  constructor() {
    console.log('constructing project');
  }
}

class SoftwareProject extends Project {
  constructor(){
    super(); // super is necessary to instantiate Project - otherwise will show error
    console.log('constructing SoftwareProject');
  }
}

class Counter {
  getTaskCount() {
    return 50;
  }
}

class ExtendedCounter extends Counter {
  getTaskCount() {
    return super.getTaskCount() + 6;
  }
}

let p = new ExtendedCounter();
console.log(p.getTaskCount());

console.log('ending in base');
