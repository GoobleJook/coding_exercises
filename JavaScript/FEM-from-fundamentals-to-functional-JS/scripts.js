//Use this file to implement Part One of your project

// var keyCount = 0;
// for (var key in animal) {
//   keyCount ++;
//   if (key === 'username'){
//     console.log(`Hi my name is ${animal[key]}`);
//   } else if (key === 'tagline') {
//     console.log(`I like to say ${animal[key]}`);
//   }
// }

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

var testAnimal = AnimalTestUser('Dr.GreenThumb', 'weed guy', 'fun to know');

// set up relationships object
var relationships = {};
var friends = [];
var matches = [];
relationships.friends = friends;
relationships.matches = matches;

var AnimalCreator = function(username, species, tagline, noises) {
  return {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  }
};

var addFriend = function(animal, friend) {
  animal['friends'].push(friend['username']);
};

var addMatchesArray = function(farm) {
  for(var i = 0; i < farm.length; i++) {
    farm[i]['matches'] = [];
  }
};

var giveMatches = function(farmWithFriends) {
  for(var i = 0; i < farmWithFriends.length; i++) {
    farm[i]['matches'] = farm[i]['friends'][0];
  }
}

var addRelationshipsObject = function(farm) {
  for(var i = 0; i < farm.length; i++) {
    farm[i]['relationships'] = relationships;
  }
}
// some animals for the farm

var quackers = AnimalCreator('Daffy Duck', 'duck', 'Yippeee!', ['quack', 'honk', 'sneeze', 'growl'])
var slither = AnimalCreator('Akasha', 'snake', 'I\'m a snake', ['hiss', 'other snake stuff']);
var natureBoy = AnimalCreator('probably Dave', 'hippie', 'I like woods and shit', ['take a shower, hippie', 'got any weed?']);
var animal = AnimalCreator('Harry', 'cat', 'I\'m Harry!', ['meow', 'caw', 'hiss']);

// put some animals on the farm
farm[0] = animal;
farm.push(quackers);
farm[farm.length] = slither;
farm.push(natureBoy);



// Give them some friends
addFriend(quackers, slither);
addFriend(slither, animal);
addFriend(natureBoy, slither);
addFriend(animal, natureBoy);
addMatchesArray(farm);
giveMatches(farm);

// Add object for relationships to farm
addRelationshipsObject(farm);
console.log(farm);
