/**PRIMITIVE TYPES ARE PASSED BY VALUE
 * meaning, if you copy a variable you
 * just get a pointer in memory of the
 * value. Modifying the copy will not
 * modify the original.
 *
 * PASS BY REFERENCE:
 * JS objects are passed by reference, meaning
 * that if you copy an object you actually get
 * access to the value in memory of the object,
 * if you modify the copy you modify the original.
 */
/**0 */

/**PASS BY VALUE EXAMPLE */
let a = 5; //changing b will not affect a

let b = a;
b++;

console.log(b); //will === 6

/**OBJECTS AND ARRAYS ARE PASSED BY REFERENCE
 * WHEN YOU DIRECTLY COPY AN OBJECT OR AN
 * ARRAY IF YOU MAKE ANY CHANGES ON THE COPY
 * IT WILL MODIFY THE ORIGINAL. BECAUSE IN THE
 * COPY THE VALUE IS PASSED BY REFERENCE TO
 * THE ORIGINAL OBJECT/ARRAY.
 */
let obj1 = { name: "Omar", password: 12345 };
let obj2 = obj1;

obj2.password = "abcdef";

console.log(obj1); //pw will be abcdef
console.log(obj2); //pw will be abcdef

let array1 = [1, 2, 3, 4, 5];
let array2 = array1;

array2.push("new item");
console.log("array1", array1); //will give you [1,2,3,4,5,'new item']
console.log("array2", array2); //will give you [1,2,3,4,5,'new item']

/**You can CLONE an ARRAY with Array.concat(arr)
 * it will pass the value no the reference.
 * THERE ARE OTHER METHODS TO COPY AND
 * MODIFY ARRAYS OTHER THAN CONCAT
 */

let array3 = [].concat(array1);
array3.push("concat");
console.log("array3", array3);

/**You can SHALLOW CLONE an OBJECT with Object.assign({},obj)
 * The Object.assign() method takes to value, one
 * is the empty brackets second item is the object
 * you want to clone.
 * It will pass the value not the reference to the object.
 * THERE ARE OTHER METHODS TO COPY AND
 * MODIFY OBJECTS OTHER THIS ONE IS TO CLONE.
 */

const object1 = { name: "Omar", lastName: "Vega" };
const object2 = object1; //this will return a reference to object 1
object2.lastName = "Abreu"; //if you modify object2 it will also modify object1
console.log("object copy", object1); //will {name:'Omar",lastName:"Abreu"}
const objectClone = Object.assign({}, object1);
objectClone.lastName = "Vega";
console.log("object1", object1); //will print the modified version of object1
console.log("object Clone", objectClone); //will clone object1 but will not modify it.

/*** you can also use the SPREAD operator
 * to SHALLOW CLONE an object
 */

const objectToSpread = {
  name: "Alejandro",
  lastName: "Vega",
};

const objectSpread = { ...objectToSpread };
console.log(objectSpread);
objectSpread.name = "abigail";
console.log("objectSpread", objectSpread);

/**TO DO A DEEP CLONE OF AN OBJECT USE JSON.parse(JSON.stringify(obj))
 * This will create a deep clone of the object. This is useful if, you have
 * nested objects.
 * WARNING: NOT TO BE USED WITH BIG OBJECT IT MAY HAVE PERFORMANCE IMPLICATIONS.
 */
const objectClone2 = {
  fullName: { name: "Omar", lastName: "Vega" },
};
const objectShallowClone = { ...objectClone2 };
objectShallowClone.fullName.name = "Alejandro";
console.log(objectShallowClone); //will print fullName:{name:"Alejandro",lastName:"Vega"}
console.log(object2);

const objectDeepClone = JSON.parse(JSON.stringify(objectClone2));
objectDeepClone.fullName.name = "Abigail"; //will not affect objectClone2
console.log("abigail", objectDeepClone);
console.log("alejandro", objectClone2);
