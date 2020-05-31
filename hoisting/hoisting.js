// HOISTING

// The javaScript engine does complete hoisting of functions, it
// assigned a value in memory.For variable on the first run,
// the engine assigned variables undefined as the first argument.

a();

function a() {
  console.log("hi");
}

function a() {
  // 'BYE' will be printed to the console because javaScript assigned
  // the 'HI' value to the function, once it runs the second a() function
  //   declaration says, well I already know a(), but the value just changed
  // it will reassign the value in the lexical scope of the second function.
  console.log("bye");
}
