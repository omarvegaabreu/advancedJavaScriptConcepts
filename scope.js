/***
 * function scope vs block scope
 */

if (5 > 4) {
  //var is function scope
  //the variable can be accessed
  //outside of the function

  var secret = "secret";
}

console.log(secret);

if (5 > 4) {
  //const and let
  //are block scoped can not
  // be accessed outside the function
  //block

  const secret2 = "secret2";
  let secret3 = "secret3";
}

console.log(secret2); // can not be accessed outside
console.log(secret3);
