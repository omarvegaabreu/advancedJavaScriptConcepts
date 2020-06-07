/**CLOSURES */

/**
 * A closure is the combination of a function bundled
 * together (enclosed) with references to its surrounding
 * state (the lexical environment). In other words, a closure gives
 * you access to an outer function's scope from an inner function.
 *
 * *** A closure returns a function.
 */

/**
 * A combination of function and the lexical environment
 * from which it was declared.
 */

/**
 * CLOSURE ARE:
 * 1. MEMORY EFFICIENT
 * 2. ENCAPSULATION: principle of least privilege,
 */

const familyTree = () => {
  const grandFather = "GrandFather";
  return () => {
    const father = "father";
    return () => {
      const son = "son";
      return () => {
        return `${grandFather} > ${father} > ${son}`;
      };
    };
  };
};

// console.log(familyTree()()()());

const printSong = (songPart1) => (songPart2) => (songPart3) => (songPart4) =>
  console.log(`${songPart1},${songPart2},${songPart3},${songPart4}`);

printSong("part1")("part2")("part3")("part4");

function callMeMaybe() {
  setTimeout(() => {
    console.log(`Give me your number ${callMe}`);
  }, 5000);
  const callMe = 7862349591;
}
callMeMaybe();
callMeMaybe();
callMeMaybe();
callMeMaybe();

function bigArray(index) {
  const bigArray = new Array(700000).fill(":)");
  console.log("created");
  return () => {
    return bigArray[index];
  };
}

console.log(bigArray(689999)());
console.log(bigArray(679999)());
console.log(bigArray(669999)());
console.log(bigArray(659999)());
console.log(bigArray(649999)());
console.log(bigArray(639999)());
