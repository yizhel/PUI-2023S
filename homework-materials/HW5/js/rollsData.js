const rolls = {
  Original: {
    basePrice: 2.49,
    imageFile: "original-cinnamon-roll.jpg",
  },
  Apple: {
    basePrice: 3.49,
    imageFile: "apple-cinnamon-roll.jpg",
  },
  Raisin: {
    basePrice: 2.99,
    imageFile: "raisin-cinnamon-roll.jpg",
  },
  Walnut: {
    basePrice: 3.49,
    imageFile: "walnut-cinnamon-roll.jpg",
  },
  "Double-Chocolate": {
    basePrice: 3.99,
    imageFile: "double-chocolate-cinnamon-roll.jpg",
  },
  Strawberry: {
    basePrice: 3.99,
    imageFile: "strawberry-cinnamon-roll.jpg",
  },
};

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

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

let cart = [];
