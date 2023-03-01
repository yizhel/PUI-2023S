console.log(glazeOptions);

function calculatePrice(roll) {
  let totalPrice = document.querySelector(".price");
  let price = (basePrice + glaze.price) * pack.price;
  price = price.toFixed(2);
  totalPrice.innerText = "$" + price;
}

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
console.log(initCart);

function addToCart(roll) {
  let cartItem = new Roll(
    roll.rollType,
    roll.rollGlazing,
    roll.packSize,
    roll.basePrice
  );
  cart.push(cartItem);
}
Array.from(initCart).forEach((element) => {
  addToCart(element);
});

console.log(cart);
