const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log("I am in the " + i);
  }, 1000);
}

//will print 'I am in the'+4

/**changing var to let will fix it */
const array2 = [1, 2, 3, 4];

for (let i = 0; i < array2.length; i++) {
  setTimeout(() => {
    console.log("I am in the " + i);
  }, 1000);
}

/**
 * Also using closures with an IIFE/Closure will fix it
 */
const array3 = [1, 2, 3, 4];

for (var i = 0; i < array3.length; i++) {
  (function (closureI) {
    setTimeout(() => {
      console.log("I am in the " + closureI);
    }, 1000);
  })(i);
}
