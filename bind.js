/**with bind() you can
 * use a method in another object
 * it also takes two parameters
 *
 * wizard.heal.bind(archer,50,50)
 *
 * bind() will return the value of the function
 * call to be used at a later time.
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
const healWizard = wizard.heal.bind(archer, 50, 50); //call take two parameters
console.log(healWizard());
