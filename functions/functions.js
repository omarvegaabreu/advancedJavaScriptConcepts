//function expression
//are defined at run time,
//when the function is called or executed

const canada = () => {
  console.log("cold");
};

//function declaration (uses the function keyword)
//this function is defined at parse time,
//when the compiler looks at teh code.
function india() {
  console.log("hot");
}

//function call/invocation/execution
// canada();
// india();

function marry(person1, person2) {
  //array from is an javaScript method
  // wil convert An array-like
  // or iterable object to convert to an array.
  // you pass to it to an Array.
  console.log(Array.from(arguments));
  console.log(`${person1} is married to ${person2}`);
}

console.log(marry("omar", "rosely"));

// const name = "omar";
// console.log(Array.from(name));
