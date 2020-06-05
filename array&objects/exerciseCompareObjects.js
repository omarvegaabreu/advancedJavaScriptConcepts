// How would you compare two objects
//if they are pointing to a different
//location in memory but still have the same properties ?

const user1 = { name: "nerd", org: "dev" };
const user2 = { name: "nerd", org: "dev" };
const eq = JSON.stringify(user1) === JSON.stringify(user2);
console.log(eq); // gives false
