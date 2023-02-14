let glazeOptions = [
  {
    option: "Keep Original",
    price: 0,
  },
  {
    option: "Sugar Milk",
    price: 0,
  },
  {
    option: "Vanilla Milk",
    price: 0.5,
  },
  {
    option: "Double Chocolate",
    price: 1.5,
  },
];

let packOptions = [
  {
    option: "1",
    price: 1,
  },
  {
    option: "3",
    price: 3,
  },
  {
    option: "6",
    price: 5,
  },
  {
    option: "12",
    price: 10,
  },
];

// Code from lab 4

// (basePrice + glazingPrice) * packPrice

function displayCar(car) {
  let carTitleElement = document.querySelector("#car-title");
  let carInfoElement = document.querySelector("#car-info");

  carTitleElement.innerText = car.model;
  carInfoElement.innerText = car.description;
}

function onSelectValueChange() {
  // In this function, `this` corresponds to the select
  // element. So `this.value` will contain the value of the
  // selected option as a string.
  console.log("You selected " + this.value);

  // We need to convert the string value to an integer
  let carIndex = parseInt(this.value);

  // Now retrieve the object at the index specified by the select's value
  let carToDisplay = allCars[carIndex];

  // Update the UI
  displayCar(carToDisplay);
}

// When the page loads, find the select element.
let selectElement = document.querySelector("#car-select");

// Let's add a new car to the allCars array.
let newCar = {
  model: "Honda Odyssey",
  description: "A practical minivan for soccer moms and everyone else.",
};
allCars.push(newCar);

// We also need to add this new car to the UI. To do that, create a new
// 'option' HTML element, set its attributes, and add it to the select
// element.
var option = document.createElement("option");
option.text = newCar.model;
option.value = allCars.length - 1; // Its value should be the index of the last element in allCars
selectElement.add(option);

// Give it a listener for the 'change' event, which is a function that will run
// when the selected option changes. You could also do this by setting the
// onchange property of selectElement, e.g. selectElement.onchange = ...
selectElement.addEventListener("change", onSelectValueChange);

// Initially, display the first car
displayCar(allCars[0]);
