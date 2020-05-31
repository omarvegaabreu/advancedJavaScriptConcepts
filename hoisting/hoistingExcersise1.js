var favoriteFoods = "grapes";

var foodForThought = function () {
  // first one will print undefined because the favorite foods variable
  // is declared outside of the lexical scope of this function,
  // once the variables and functions are assigned to the heap
  // the first favoriteFoods variable will be assigned undefined
  // where as the second will be allocated a value in memory.
  //This is one of the reasons why using var to declare a variable
  //is not a good idea. Because variables declared with var will
  //be assigned an undefined value in memory
  console.log("original favorite food is: " + favoriteFoods);
  // will print : "original favorite food is : undefined"
  var favoriteFoods = "sushi";

  console.log("new favorite food is :" + favoriteFoods);
  // will print new favorite food is sushi
};

foodForThought();
