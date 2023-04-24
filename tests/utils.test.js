const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("Should return the area of a rectangle given its dimensions", function() {
  const result = utils.area(2, 2);
  expect(result).to.be.a('number');
  expect(result).to.equal(4);
});

it("Should return null if negative width is given to area function", function() {
  const area = utils.area(-2, 2);
  expect(area).to.be.null;
});

it("Should return null if negative length is given to area function", function() {
  const area = utils.area(2, -2);
  expect(area).to.be.null;
});

it("Should return the perimeter of a rectangle given its dimensions", function() {
  const perimeter = utils.perimeter(2, 2);
  expect(perimeter).to.be.a('number');
  expect(perimeter).to.equal(8);
});

it("Should return null if negative width is given to perimeter function", function() {
  const perimeter = utils.perimeter(-2, 2);
  expect(perimeter).to.be.null;
});

it("Should return null if negative length is given to perimeter function", function() {
  const perimeter = utils.perimeter(2, -2);
  expect(perimeter).to.be.null;
});

it("Should return the area of a circle given the radius", function() {
  const area = utils.circleArea(2);
  expect(area).to.be.a('number');
  expect(area).to.equal(Math.PI * (2 * 2));
});

it("Should return null if the radius is negative", function() {
  const area = utils.circleArea(-2);
  expect(area).to.be.null;
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const currentCart = utils.getShoppingCart();
  expect(currentCart).to.be.an.instanceOf(Array);
  expect(currentCart).to.have.lengthOf(0);
});

it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("apple", 0.99);
  const currentCart = utils.addItemToCart(item);
  expect(currentCart).to.include(item);
});

it("Should return the number of items in the cart", function() {
  const item = utils.createItem("apple", 0.99);
  const fancyBanana = utils.createItem("banana", 1.99);
  utils.addItemToCart(item);
  utils.addItemToCart(item);
  utils.addItemToCart(fancyBanana);

  const numItems = utils.getNumItemsInCart();
  expect(numItems).to.be.a('number');
  expect(numItems).to.equal(3)
});

it("Should remove items from cart")

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
