//Use this file to implement Part One of your project

var animal = {};

animal.username = 'Harry';
console.log(animal.username);

animal['tagline'] = 'I\'m Harry!';
console.log(animal['tagline']);

var noises = [];
animal.noises = noises;
console.log(animal);

var keyCount = 0;
for (var key in animal) {
  keyCount ++;
  if (key === 'username'){
    console.log(`Hi my name is ${animal[key]}`);
  } else if (key === 'tagline') {
    console.log(`I like to say ${animal[key]}`);
  }
  return `Hi my name is ${animal[key]}`
}

console.log(`There are ${keyCount} keys in the animal object!`);
