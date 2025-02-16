// Global Execution Context
let age = 25;

function displayAge() {
  console.log("Age:", age);
}

function changeAge() {
  age = 30;
  console.log("Updated Age:", age);
}

displayAge(); // Output: Age: 25
changeAge();  // Output: Updated Age: 30
displayAge(); // Output: Age: 30
