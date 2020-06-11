/**
 * 1.PURE FUNCTIONS HAVE NO SIDE EFFECTS
 * MEANING THE FUNCTION DOES NOT MODIFY
 * ANYTHING OUTSIDE ITSELF
 *
 * The problem with side effects, if you have global
 * variables different functions can modify its data,
 * which creates a lot of bugs.
 *
 * 2. GIVEN THE SAME INPUT HEY GIVE YOU THE SAME OUTPUT.
 * RE
 *
 * REFERENTIALLY TRANSPARENT: A function is referentially
 * transparent if it’s a pure function whose parameters
 * are immutable.
 * 
 **** LOOKUP IMMUTABLE JS 
 To achieve this in JavaScript we use immutable-js to create 
 immutable data, and closures to make sure observers can’t introspect 
 our object and mutate its state
 */
