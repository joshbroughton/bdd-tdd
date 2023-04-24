// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  const area = w * h;
  return area >= 0 ? area : null;
}

const perimeter = (w, h) => {
  if (w < 0 || h < 0) {
    return null;
  } else {
    return 2 * (w + h);
  }
}

const circleArea = r => {
  return r >= 0 ? Math.PI * (r * r) : null;
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0;
  return getNumItemsInCart();
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart;
}

const addItemToCart = (item) => {
  shoppingCart.unshift(item);
  return shoppingCart;
}

const getNumItemsInCart = () => {
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  const index = shoppingCart.indexOf(item);
  shoppingCart.splice(index, 1);
}

const sumCart = () => {
  let sum = 0;
  shoppingCart.forEach((item) => {
    sum += item.price * item.quantity;
  });

  return sum;
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, sumCart
}
