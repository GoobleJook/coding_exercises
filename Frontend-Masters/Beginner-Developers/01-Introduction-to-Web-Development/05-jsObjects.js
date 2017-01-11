var car = {
  make: "Tesla",
  model: "Model S",
  acceleration: 30,
  accelerate: function() {
    this.accelerate += 10
  }
}

console.log("I drive a " + car.make + " " + car.model +".");
console.log("I am going " + car.acceleration + " MPH.");
car.accelerate;
console.log("Vroom! Vroom! Now I am going " + car.acceleration + " MPH!")