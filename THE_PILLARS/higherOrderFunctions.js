/**HIGHER ORDER FUNCTIONS
 * Are functions that return another function,
 * or that take functions as an argument.
 */

/**regular function */
const grantUserAccess = (name) => console.log(`Grant access to ${name}`);

function letUserLogin(user) {
  let array = [];
  for (let i = 0; i > 1000000000000; i++) {
    array.push(i);
  }

  return grantUserAccess(user);
}
