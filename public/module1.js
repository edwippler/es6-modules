// export let projectId = 99;
// let projectName = 'BuildingThings';
// export default projectName;

let projectId = 87;
let projectName = 'WalkingTaco';
export { projectId, projectName};

export function showPlace() {console.log('in original place');}
export function updatePlace() {
  showPlace = function (){console.log('in updated places');}
}


console.log('loaded from module1');
