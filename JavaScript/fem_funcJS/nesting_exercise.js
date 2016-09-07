var noiseArray = ["oink", "heehaw", "meow"];
var animal = {};
var animals = [];
var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
var zebra = { username: 'Zeb', tagline: 'Heehaw!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
var fish = { username: 'glub glub', tagline: 'Shucks!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

// populate the noiseArray Array
noiseArray.unshift("bark");
noiseArray.push("hiss");
noiseArray[noiseArray.length] = "boing";

// populate the animal Object
animal["username"] = "Harry"
animal["tagline"] = "I'm Harry!"
animal["noises"] = noiseArray


animals.unshift(animal);
animals.push(quackers);
animals.push(zebra);
animals.push(fish);

var friends = [];
var matches = [];
for (var i = 0; i < 2; i++) {
	friends.push(animals[i].username);
}

var relationships = {};
relationships['friends'] = friends;
relationships['matches'] = matches;
relationships['matches'].push(relationships['friends'][0])
console.log(relationships);

for (var i = 0; i < animals.length; i++) {
	animals[i]['relationships'] = relationships;
}