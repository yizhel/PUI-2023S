let glazeOptions = [
  {
    text: "Keep Original",
    price: 0,
  },
  {
    text: "Sugar Milk",
    price: 0,
  },
  {
    text: "Vanilla Milk",
    price: 0.5,
  },
  {
    text: "Double Chocolate",
    price: 1.5,
  },
];

let packOptions = [
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

const basePrice = 2.49;
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
