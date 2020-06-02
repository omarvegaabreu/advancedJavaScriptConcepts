var c = "c";
function sayMyName() {
  var a = "a";
  return function findMyName() {
    var b = "b";
    console.log(c);
    return function printName() {
      var c = "c";
      return "Omar Vega";
    };
  };
}

sayMyName()()();

function findMyName() {
  var b = "b"; //added to var env
  return printMyName(); //3
}

function printMyName() {
  var c = "c"; //added to var env

  return "Omar Vega"; //4
}

function sayMyName() {
  var a = "a"; //added to variable environment

  return findMyName(); //2
}

// console.log(sayMyName());

//sayMyName()
//global
//callStack

/********************************* */

function two() {
  var isValid;
}

function one() {
  var isValid = true;
  two();
}

var isValid = false;
// console.log(one());
// console.log(isValid);

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
  // console.log(Array.from(arguments));
  // console.log(`${person1} is married to ${person2}`);
}

// console.log(marry("omar", "rosely"));

// const name = "omar";
// console.log(Array.from(name));
