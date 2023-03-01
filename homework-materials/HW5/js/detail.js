// Find url parameter for roll
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get("roll");

// Update title
const headerElement = document.querySelector(".navtitle");
headerElement.innerText = chosenRoll + " Cinnamon Roll";

// Update the image
const rollImage = document.querySelector(".detailimg");
rollImage.src = "./assets/products/" + rolls[chosenRoll].imageFile;
rollImage.alt = chosenRoll;

// Update the price
let basePrice = rolls[chosenRoll].basePrice;

const glazeOptions = [
  {
    text: "Keep Original",
    price: 0,
  },
  {
    text: "Sugar Milk",
    price: 0,
  },
  {
    text: "Vanilla Milk (+$0.50)",
    price: 0.5,
  },
  {
    text: "Double Chocolate (+$1.50)",
    price: 1.5,
  },
];

const packOptions = [
  {
    text: "1",
    price: 1,
  },
  {
    text: "3",
    price: 3,
  },
  {
    text: "6",
    price: 5,
  },
  {
    text: "12",
    price: 10,
  },
];

// Base Code from lab 4

// (basePrice + glazingPrice) * packPrice

let glazeOption = 0;
let packOption = 0;

// populate selections in detail.html
let selectGlaze = document.querySelector(".glazeSelect");
let selectPack = document.querySelector(".packSelect");

function makeGlazeOption(element, index) {
  var option = document.createElement("option");
  option.text = element.text;
  option.value = index;
  selectGlaze.add(option);
}

function makePackOption(element, index) {
  var option = document.createElement("option");
  option.text = element.text;
  option.value = index;
  selectPack.add(option);
}

// uses object to make options for selection
glazeOptions.forEach((element, index) => makeGlazeOption(element, index));
packOptions.forEach((element, index) => makePackOption(element, index));

selectGlaze.addEventListener("change", onSelectGlazeChange);
selectPack.addEventListener("change", onSelectPackChange);

// Display default initially
displayPrice(glazeOptions[0], packOptions[0]);

// changes display price in detail.html
function displayPrice(glaze, pack) {
  let totalPrice = document.querySelector(".price");
  let price = (basePrice + glaze.price) * pack.price;
  price = price.toFixed(2);
  totalPrice.innerText = "$" + price;
}

// edits glaze value
// uses global variable to track pack
function onSelectGlazeChange() {
  const glazeIndex = parseInt(this.value);
  glazeOption = glazeIndex;
  let glaze = glazeOptions[glazeIndex];
  displayPrice(glaze, packOptions[packOption]);
}

// edits pack multiplier
// uses global variable to track glaze
function onSelectPackChange() {
  const packIndex = parseInt(this.value);
  packOption = packIndex;
  let pack = packOptions[packIndex];
  displayPrice(glazeOptions[glazeOption], pack);
}

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

let cart = [];

// add cart functionality
// prints cart when
let addButton = document.querySelector(".addbutton");
addButton.addEventListener("click", addToCart);

// print price in add cart
function addToCart() {
  const currRoll = chosenRoll;
  const currGlaze = glazeOptions[glazeOption].text;
  const currPack = packOptions[packOption].text;
  const currBase = basePrice;
  let cartItem = new Roll(currRoll, currGlaze, currPack, currBase);
  cart.push(cartItem);
  console.log(cart);
}
