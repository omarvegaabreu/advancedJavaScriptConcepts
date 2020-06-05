/**FUNCTIONS ARE FIRST CLASS CITIZENS IN JS */

/**
 * 1. Functions can be assigned to variables,
 * also as property of objects.
 */
const sayHi = () => {
  console.log("Hi");
};

/**
 * 2.You can pass a function as a parameter
 */

function a(fn) {
  fn();
  console.log("first function is running");
}

console.log(
  a(() => {
    console.log("hi there");
  })
);
/**3. You can pass a function to another function */
function a() {
  return function b() {
    console.log("function b");
  };
}
/**you can also use this syntax
 * a()()
 */

/**
 * Or call it as a variable
 */
const nestedFunction = a();
nestedFunction();

/***
 * DO'S AND DON'Ts WITH FUNCTIONS
 */

for (let i = 0; i < 5; i++) {
  function dont() {
    console.log("dont");
  }
  dont();
}

/**INSTEAD INITIALIZE FUNCTION OUTSIDE
 * AND CALL INSIDE THE LOOP.
 */
function yesDo() {
  console.log("Do");
}

for (let i = 0; i < 5; i++) {
  yesDo();
}
