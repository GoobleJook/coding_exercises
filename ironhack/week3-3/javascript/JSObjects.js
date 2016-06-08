// One way to do OOP in JS

var animal = {
	name: "Shadow",
	noise: "Brrrrr",

	shout: function() {
		console.log("Mooooooooo!");
	},

	makeNoise: function() {
		console.log(this.noise + "!!!!!!!!!!!!");
	}
};

animal.makeNoise()
animal.shout()

// Another way
var Animal = function (name, noise) {
	this.name = name;
	this.noise = noise;

	this.makeNoise = function () {
		console.log(this.noise + "!!!!");
	}

	this.shout = function () {
		console.log("Moooooooooo!")
	}
}; // creates functions for each Animal, which eats memory -- why create duplicate cdoe?

var Harry = new Animal("Harry", "meow");
Harry.makeNoise()

// So we can use prototypes!

var Animals = function (name, noise) {
	this.name = name;
	this.noise = noise;
};

Animals.prototype.makeNoise = function () {
	console.log(this.noise)
}

var Harries = new Animals("Harry", "meow");
Harries.makeNoise()

// Create a car constructor -- slide 22 'OO JavaScript'	
function Car (model, noise) {
	this.model = model;
	this.noise = noise;
	this.wheels = 4;
};

Car.prototype.makeNoise = function () {
	console.log("I used to drive a " + Wreck.model + ", and it went " + Wreck.noise + " I miss my wrecked " + Wreck.model  +".");
};

var Wreck = new Car("Camaro", "Vroom, vroom, crash!");
Wreck.makeNoise()