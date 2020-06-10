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
 *
 * SUB-CLASSING when you use the key word
 * EXTENDS. The sub-class in this case will
 * inherit all the properties and methods from
 * the parent class.
 *
 * INSTANCE is when we use the new key word of a class,
 * or simply put when we clone a class or copy a class
 *
 *
 * 4 PILLARS OF OOP
 *
 * ENCAPSULATION:Encapsulation is the packing of data and functions into one component
 * (for example, a class) and then controlling access to that component to make a "blackbox"
 *  out of the object. Because of this, a user of that class only needs to know its
 * interface (that is, the data and functions exposed outside the class),
 * not the hidden implementation.
 *
 * ABSTRACTION:Abstraction in computer programming is a way to reduce complexity
 * and allow efficient design and implementation in complex software systems.
 * It hides the technical complexity of systems behind simpler APIs.
 *
 * INHERITANCE : The PARENT CLASS AND SUBCLASS OR CHILD CLASS are linked
 * to the parent thought the prototype chain. Also INHERITANCE helps SHARE MEMORY
 * SPACE
 *
 * POLYMORPHISM: THE WORD IT SELF MEANS MANY FORMS. Its the ability to call the same
 * method on different objects and each object responding in a different way. It has
 * the ability to process objects differently depending on their data types
 * or class.
 *
 * BENEFITS OF OOP:
 *
 * CLEAR AND UNDERSTANDABLE CODE.
 * EASY TO EXTEND.
 * EASY TO MAINTAIN
 * MEMORY EFFICIENT
 * HELPS KEEP CODE DRY
 *
 */
class Character {
  constructor(name, race, weapon, attack, special) {
    this.name = name;
    this.race = race;
    this.weapon = weapon;
    this.attack = attack;
    this.special = special;
  }
  greeting() {
    return `My name is ${this.name}, I am a ${this.race}`;
  }
  attack() {
    return `${this.attack}`;
  }
}

class Elf extends Character {
  constructor(name, race, weapon, attack, special, attackPower) {
    super(name, race, weapon, attack, special);
    this.attackPower = attackPower;
  }
}

class Oger extends Character {
  constructor(name, race, weapon, attack) {
    super(name, race, weapon);
    this.attack = attack;
  }
}

const jamesElf = new Elf("james", "elf", "word", "kick you", "nothing", 100);
console.log(jamesElf);

const jamesOger = new Oger("james oger", "oger fool", "none", "punch");
console.log(jamesOger);
