/***
 * TYPE COERCION IN JS
 * When the operands are different types
 * one of the will be converted into equivalent
 * values
 * 1(number)=='1' string one
 *
 * TYPE COERCION HAPPENS WHEN YOU DO
 * THE == SIGN
 */

/****BASICALLY DON'T USE DOUBLE EQUAL */
false == ""; //false //WRONG : true ????WTF
false == []; //false //WRONG: true ??? WTF
false == {}; //false
"" == 0; //false //WRONG: true ??? WTF
"" == []; //false
"" == {}; //false
0 == []; //false
0 == {}; //false
0 == null; //false
