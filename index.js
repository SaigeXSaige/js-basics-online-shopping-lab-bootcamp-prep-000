var cart = [];

var price = Math.floor(Math.random() * (100)) + 1;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = { itemName: `${item}` , itemPrice: price};
  cart.push(items);
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  var myCart = [];
  for (var i = 0; i < cart.length; i++) {
    myCart.push(`${item} at ${price}`); 
  }
  if (myCart.length === 0){
    return ('Your shopping cart is empty.');
  } else if (myCart.length === 1) {
    return ('In your cart, you have' + myCart + '.');
  } else {
    myCartAnd = myCart.slice(0 , array.length - 1);
    return 
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
