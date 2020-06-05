/**with apply() you can
 * use a method in another object
 * it also takes two parameters
 *
 * wizard.heal.apply(archer,[50,50])
 *
 * this will add an array to the parameter values
 * if the function is set up to take arguments.
 */

const wizard = {
  name: "Merlyn",
  health: 50,
  heal() {
    return (this.health = 100);
  },
};
wizard.heal();
console.log(wizard.health);

const archer = {
  name: "Omar Vega",
  health: 30,
};
console.log(archer);
wizard.heal.apply(archer, [50, 100]); //call take two parameters
console.log(archer);
