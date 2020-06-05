const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
// console.log(giveMeTheCharacterNOW());

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
