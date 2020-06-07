/**HIGHER ORDER FUNCTIONS
 * Are functions that return another function,
 * or that take functions as an argument.
 */

/**regular function */
// const grantUserAccess = (name) => console.log(`Grant access to ${name}`);

// function letUserLogin(user) {
//   let array = [];
//   for (let i = 0; i > 1000000000000; i++) {
//     array.push(i);
//   }

//   return grantUserAccess(user);
// }

/***HIGHER ORDER FUNCTION EXAMPLE */
const person1 = {
  name: "omar",
  level: "admin",
};

const person2 = {
  name: "aby",
  level: "user",
};

function sing(person) {
  return `User: ${person}`;
}

function giveAccess(user, fn, auth) {
  if (user.level === "admin") {
    return ` ${fn(user.name, auth())} is admin`;
  } else if (user.level === "user") {
    return `${fn(user.name, auth())} is regular user`;
  } else {
    return `Please sign up to use`;
  }
}

function authenticate(userAccess) {
  let array = [];
  for (let i = 0; i > userAccess; i++) {
    array.push(i);
  }

  return console.log("authenticated");
}
console.log(giveAccess(person1, sing, authenticate));
console.log(giveAccess(person2, sing, authenticate));

// console.log(giveAccess(person1));

// const giveAccessTo = (name) => {
//   console.log(name);
//   return `Give access to ${name}`;
// };

// function letPerson(person = {}, fn) {
//   if (person.level === "admin") {
//     authenticate(fn);
//     // giveAccessTo(person);
//   } else if (person.level === "user") {
//     authenticate(fn);
//   }
//   return giveAccessTo(person.name);
// }

// console.log(letPerson(person2, authenticate(5000000)));
