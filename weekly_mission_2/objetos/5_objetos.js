// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function (yourPet) {
    console.log(`${this.name} say's hello to ${yourPets}`);
  },
};

console.log("Ejemplo 5: Objeto con método que recibe parámetros");
myPet.sayHelloToMyPet("Tulio");

// const newPet = {
//   name: "Pantera",
//   sayHelloToOtherPet: function (yourPetName) {
//     console.log(`${this.name} says hello to your pet ${yourPetName}`);
//   },
// };
// newPet.sayHelloToOtherPet("Duque");
