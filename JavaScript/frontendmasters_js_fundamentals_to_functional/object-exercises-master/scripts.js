var animal = {};
var noises = ['meow','bark'];
var count = 0;

animal.username = "Harry"
animal["tagline"] = "I'm Harry!"
animal.noises = noises;


for(var prop in animal) {
	count++;
	if(prop === "username") {
		console.log("Hi my name is " + animal[prop]);
	} else if(prop === "tagline") {
		console.log("I like to say " + animal[prop]);
	} else if(prop === "noises") {
		console.log(animal[prop][0])
	} 
} console.log("Animal has " + count + " properties!");