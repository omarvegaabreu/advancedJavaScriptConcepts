/**
 * THERE ARE PRIMITIVE 7 TYPES IN JAVASCRIPT
 *
 * A primitive type: is a data that represents only
 * a single value in memory. So the value assigned is
 * its current value. A variable of a primitive type
 * directly contains the value of that type.
 * PRIMITIVE TYPES ARE IMMUTABLE
 *
 * const number = 5
 * number === 5 //this is true
 *
 *
 */

const numbers = 7;
//number is a JS TYPE
/**typeof 7 === 'number' */
const booleanType = [true, false]; //booleans true,false
/**typeof true/false === boolean */
const stringType = "string is a js type"; //strings
/**typeof string === string */
const undefinedType = undefined; //is a type
/**typeof undefined === undefined */
/**undefined is the absence of a definition
 * it is used as the default value by the js engine
 * when it initializes our variables. It means that
 * there is a variable there, but it holds no value.
 */
const nullType = null; //is a type is js
/***typeof null === object (this is a bug in the source code) */
/**null means that there is no value there, it does
 * not imply that there is a variable
 */

const symbolType = symbol("im a type"); //symbol introduced in ES6
//is a js type
/**type of symbol === symbol */

/**NON-PRIMITIVE TYPES */
/***
 * A non primitive type does not contain a value
 * directly.The value of variable is passed by
 * reference, its a pointer in memory.
 *
 */

const objectType = {
  type: "object", //object is a non-primitive type
};
/**typeof object === object */
