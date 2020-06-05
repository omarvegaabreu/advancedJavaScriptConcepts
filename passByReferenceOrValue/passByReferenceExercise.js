const number = 100;
const string = "Jay";
let obj1 = {
  value: "a",
};
let obj2 = {
  value: "b",
};
let obj3 = obj2; //this is {value:"b"}

function change(number, string, obj1, obj2) {
  number = number * 10; //100 * 10
  string = "Pete"; //string is a const it will give error
  obj1 = obj2; //obj1={value:"b"}
  obj2.value = "c"; //obj2={value:'C'}
}

change(number, string, obj1, obj2);

/**GOT THIS ONE WRONG
 * THE METHODS WHERE CALLING
 * THE ORIGINAL VARIABLES AND
 * GIVEN THE LEXICAL SCOPE OF
 * FUNCTIONS THE CHANGES DID NOT APPLY
 * TO THE METHODS BELLOW.
 */

//Guess the outputs here before you run the code:
console.log(number); //=100
console.log(string); //syntax error
console.log(
  obj1.value
); /***will not print because of the above error,but if it where to print it would pring "b"**/
