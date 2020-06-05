//THIS is the object that the function is property of
/**
 * IMPORTANCE OF THIS KEYWORD
 * 1. Gives methods access to their object,
 *    or object properties.
 */

/**
 * In javascript our lexical scope (available data + variables
 * where the function was defined) determines our available
 * variables. Not where the function is called (dynamic scope )
 *
 */
const person1 = {
  name: "Omar",
  sing() {
    return `${this.name} lalala`;
  },
  singAgain() {
    return `${this.sing()}!`;
  },
};

// console.log(person1.singAgain());
/**
 * It also allows to execute the same
 * code for multiple objects
 */

function greeting() {
  console.log(this.name + "!");
}

const person2 = {
  name: "Omar",
  greeting: greeting,
};

const person3 = {
  name: "Rosely",
  greeting: greeting,
};

const marryRosely = {
  name: `${person2.name} & ${person3.name}`,
  greeting: greeting,
};
// person2.greeting();
// person3.greeting();
// marryRosely.greeting();

const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();
