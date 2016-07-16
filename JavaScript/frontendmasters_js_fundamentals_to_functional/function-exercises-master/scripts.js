

var AnimalTestUser = function(username) {
	if (arguments.length > 1) {
		var otherArgs = [];
		for (var i = 1; i < arguments.length; i++) {
			otherArgs.push(arguments[i]);
		}
	} return { 'username' : username, 'otherArgs': otherArgs };
};  //tests to see if only username is contained, returns username (additional arguments as an array) as object 


var AnimalCreator = function(username, species, tagline, noises) {
	return {
		'username' : username,
		'species' : species,
		'tagline' : tagline,
		'noises' : noises,
		'friends' : []
	}
}; // Creates a new animal with a blank array for new friends

var addFriend = function (animal, friend) {
	animal.friends.push(friend.username);
	friend.friends.push(animal.username);
	return animal;
}; // bidirectionally creates friends between animals

var addMatchesArray = function(farm){
	for(var i = 0; i < farm.length; i++) {
		farm[i].matches = [];
	}
}; // creates blank matches

var giveMatches = function(farm) {
	for(var i = 0; i < farm.length; i++) {
		farm[i].matches.push(farm[i].friends[(Math.floor(Math.random() * farm[i].friends.length))]);
	}
} // randomly assigns matches from friends

// tests
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
var pig = AnimalCreator('Oinky', 'pig', 'Oinky is my name!', ['oink', 'baahhh']);
var cow = AnimalCreator('Joe', 'cow', 'Moo!', ['moo', 'moop']);
addFriend(sheep, cow);
addFriend(sheep, pig);
myFarm = [sheep, pig, cow];
addMatchesArray(myFarm);
giveMatches(myFarm);
console.log(myFarm);