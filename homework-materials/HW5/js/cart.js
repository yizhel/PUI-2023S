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
  console.log(cartItem);

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
  let removeButton = clone.querySelector(".cart-remove");
  removeButton.setAttribute("id", id);
  return clone;
}

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

  totalPrice.innerText = "$" + total;
}

displayCart();

function removeItem(id) {
  cartIndex = cart.findIndex((element) => element[1] === id);
  console.log(cartIndex);
  cart.splice(cartIndex, 1);
  console.log(cart);
  displayCart();
}
