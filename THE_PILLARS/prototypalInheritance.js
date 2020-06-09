/***
 * "Everything in javascript is an object",
 * because of prototypal inheritance.
 */

const dragon = {
  name: "Dragon",
  fire: true,
  breatheFire() {
    return 5;
  },
  sing() {
    return `Im gonna fuck you up X ${this.breatheFire()}`;
  },
  introduction() {
    return `I am ${this.name}. Do I breathe fire? ${this.fire}`;
  },
};
console.log(dragon.breatheFire());
console.log(dragon.sing());
console.log(dragon.introduction());
const lizard = {
  name: "Jose",
  breatheFire() {
    return 2;
  },
};

//using .bind() will only use a specific method
const lizardSing = dragon.sing.bind(lizard);
console.log(lizardSing());
/**using __proto__ will create a prototypal chain
 * between both objects, allowing object to which
 * __proto__ is assigned to, the ability to go
 * up the chain and reach for other methods and
 * properties.
 */

const lizardProtoDragon = (lizard.__proto__ = dragon);
console.log("lizardProtoDragon", lizardProtoDragon.fire);
