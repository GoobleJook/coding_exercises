var car = {
  make: "Tesla",
  model: "Model S",
  acceleration: 30,
  accelerate: function() {
    this.acceleration += 10;
  }
}

console.log("I drive a " + car.make + " " + car.model +".");
console.log("I am going " + car.acceleration + " MPH.");
car.accelerate();
console.log("Vroom! Vroom! Now I am going " + car.acceleration + " MPH!")


// Brian was unable to get this to work, and mentioned that Kyle covers
// a lot of .bind() in the advanced JS classes

// var person = {
//   favorite: "Tesla Model Q",
//   getFave: function() {
//     return this.favorite;
//   }
// };

// var man = {
//   favorite: "Renault"
// }

// console.log(person.getFave());
// var func = person.getFave;
// console.log(func().bind(man));
