//init cart
let initCart = [
  {
    rollType: "Original",
    rollGlazing: "Sugar Milk",
    packSize: 1,
    basePrice: rolls["Original"].basePrice,
  },
  {
    rollType: "Walnut",
    rollGlazing: "Vanilla Milk",
    packSize: 12,
    basePrice: rolls["Walnut"].basePrice,
  },
  {
    rollType: "Raisin",
    rollGlazing: "Sugar Milk",
    packSize: 3,
    basePrice: rolls["Raisin"].basePrice,
  },
  {
    rollType: "Apple",
    rollGlazing: "Original",
    packSize: 3,
    basePrice: rolls["Apple"].basePrice,
  },
];

function addToCart(roll) {
  let cartItem = new Roll(
    roll.rollType,
    roll.rollGlazing,
    roll.packSize,
    roll.basePrice
  );
  cart.push([cartItem, cartID]);
  cartID++;
  displayCart();
}
Array.from(initCart).forEach((element) => {
  addToCart(element);
});

function calculatePrice(cartItem) {
  let priceCalc =
    (cartItem.basePrice + glazeOptionsSet[cartItem.glazing].price) *
    packOptionsSet[cartItem.size].price;
  priceCalc = priceCalc.toFixed(2);
  return priceCalc;
}

// makes html template out of each cart item
function makeCartCard(cartItem) {
  item = cartItem[0];
  id = cartItem[1];
  let template = document.querySelector(".cart-card-temp");
  let clone = template.content.cloneNode(true);

  let img = clone.querySelector(".cart-img");
  img.src = "./assets/products/" + rolls[item.type].imageFile;
  let rollType = clone.querySelector(".roll-type");
  rollType.innerText = item.type + " Cinnamon Roll";
  let rollGlaze = clone.querySelector(".roll-glaze");
  rollGlaze.innerText = "Glazing : " + item.glazing;
  let packSize = clone.querySelector(".pack-size");
  packSize.innerText = "Pack Size : " + item.size;
  let price = clone.querySelector(".cart-price");
  price.innerText = "$" + calculatePrice(item);

  // sets ids for remove buttons so we know which detail to remove
  let removeButton = clone.querySelector(".cart-remove");
  removeButton.setAttribute("id", id);
  removeButton.addEventListener("click", function () {
    console.log(removeButton.id);
    console.log("removing" + removeButton.id);
    removeItem(removeButton.id);
  });

  return clone;
}

// deletes all nodes from cart-card-box and then reattaches existing nodes
function displayCart() {
  let cartBox = document.querySelector(".cart-card-box");
  while (cartBox.firstChild) {
    cartBox.removeChild(cartBox.lastChild);
  }

  Array.from(cart).forEach((element) => {
    let card = document.createElement("div");
    card.appendChild(makeCartCard(element));
    card.classList.add("cart-card");
    cartBox.appendChild(card);
  });

  let totalPrice = document.querySelector(".cart-price.summ");
  let total = 0;
  Array.from(cart).forEach((element) => {
    total += Number(calculatePrice(element[0]));
  });

  totalPrice.innerText = "$" + total.toFixed(2);
}

displayCart();

// finds element by id number, then splices from cart array
function removeItem(id) {
  cartIndex = cart.findIndex((element) => element[1] == id);
  cart.splice(cartIndex, 1);
  displayCart();
}
