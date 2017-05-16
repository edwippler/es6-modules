console.log('loaded module2');

class Task {
  showId() {
    console.log('Task ID: 87');
  }
}

let task = new Task();
let tester = console.log('test string');

export {tester}; 
