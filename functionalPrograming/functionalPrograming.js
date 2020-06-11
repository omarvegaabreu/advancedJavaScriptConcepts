/**
 * WHAT IS FUNCTIONAL PROGRAMING
 * */
/*EXERCISE */

const user = {
  name: "Omar",
  active: true,
  cart: [],
  purchases: [],
};
// console.log("user", user);
// console.log("userCart", userCart);
//implement crt feature
//1.add items to cart
function addItem() {
  const userItem = [].concat(user);
  console.log("user item", userItem);
  // if (item) {
  //   user.cart.push(item);
  //   console.log(user.cart[0]);
  // }
  return userItem;
}
addItem();
//2.add 3% tax to item in the cart
//3.add items to purchase
//4. empty cart
//5.accept refunds
//6.track history

//check if there is an item
//check if person wants to purchase
//if the person wants to purchase
//add the item to the cart
//once the item is added to the purchase
//add tax to it
//track all items and tax in cart
// make sure to accept refunds
