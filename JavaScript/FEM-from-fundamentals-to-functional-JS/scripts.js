//Use this file to implement Part One of your project

var noiseArray = ['meow', 'woof', 'neigh'];

noiseArray.unshift('quack'); // add to the front of the array
noiseArray.push('honk'); // add to the end of the array
noiseArray[5] = 'gaamp'

var animal = {};
animal.username = 'Harry';
animal['tagline'] = 'I\'m Harry!';

animal.noises = noiseArray;
console.log(animal);

var keyCount = 0;
for (var key in animal) {
  keyCount ++;
  if (key === 'username'){
    console.log(`Hi my name is ${animal[key]}`);
  } else if (key === 'tagline') {
    console.log(`I like to say ${animal[key]}`);
  }
}

console.log(`There are ${keyCount} keys in the animal object!`);

var animals = [];
var quackers = { 
  username: 'Daffy Duck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};

var slither = {
  username: 'Akasha',
  tagline: 'I\'m a snake!',
  noises: ['hiss', 'other snake stuff']
};

var natureBoy = {
  username: 'probably Dave',
  tagline: 'I like woods and shit',
  noises: ['dirty hippy shit', 'take a shower']
};

animals[0] = animal;
animals.push(quackers);
animals[animals.length] = slither;
animals.push(natureBoy);
console.log(animals.length);

