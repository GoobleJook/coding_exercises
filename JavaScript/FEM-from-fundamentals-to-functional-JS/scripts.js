//Use this file to implement Part One of your project

var noiseArray = ['meow', 'woof', 'neigh'];

noiseArray.unshift('quack'); // add to the front of the array
noiseArray.push('honk'); // add to the end of the array
noiseArray[5] = 'gaamp'

var animal = {};
animal.username = 'Harry';
animal['tagline'] = 'I\'m Harry!';

animal.noises = noiseArray;

var keyCount = 0;
for (var key in animal) {
  keyCount ++;
  if (key === 'username'){
    console.log(`Hi my name is ${animal[key]}`);
  } else if (key === 'tagline') {
    console.log(`I like to say ${animal[key]}`);
  }
}

var farm = [];

var AnimalTestUser = function(username) {
  var otherArgs = [];
  if (arguments.length > 1) {
    for(var i = 1; i < arguments.length; i++) {
      otherArgs.push(arguments[i])
    } return {username: username, otherArgs: otherArgs}
  } else {
    return { username: username };  
  }
};

// some animals for the farm
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

// put some animals on the farm
farm[0] = animal;
farm.push(quackers);
farm[farm.length] = slither;
farm.push(natureBoy);

var testAnimal = AnimalTestUser('Dr.GreenThumb', 'weed guy', 'fun to know');
console.log(testAnimal);
