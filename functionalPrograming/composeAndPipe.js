/**
 * COMPOSE
 * any sort of data transformation, should be obvious
 */
/**
 * PIPE: is the the same thing as compose but the order
 * of the functions are opposite.
 */

/**
 *
 *ARITY:the number of arguments a function takes. Its better to use one or two
 arguments per function.
 */

const compose = (f, g) => (num) => f(g(num));

const multiplyBy3 = (num) => num * 3;

const makePositive = (num) => Math.abs(num);

const makePositiveAndMultiplyBy3 = compose(multiplyBy3, makePositive);

console.log(makePositiveAndMultiplyBy3(-3));
