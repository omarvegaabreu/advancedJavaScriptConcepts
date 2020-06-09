/**
 * OOP is good for encapsulation you have STATE
 * which you can manage with methods(functions),
 * which interact with the state.
 * STATE: Data within the object
 */

/**FACTORY FUNCTION:
 * A FUNCTION THAT CREATES OBJECTS FOR US
 */

/**
 * Object.create() allow us to "bind" a function to
 * a new object and/or create a different
 */
const elfAttackStore = {
  attack() {
    return `Attack with ${this.weapon}`;
  },
};
function createElf(name, weapon) {
  let elf = Object.create(elfAttackStore);
  elf.name = name;
  elf.weapon = weapon;
  return elf;
}
const omar = createElf("Omar", "club");

console.log(omar.attack());
