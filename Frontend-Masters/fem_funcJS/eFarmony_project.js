// Teacher had me add for...in syntax, then suggested the for i
// that I previously had would be better

var AnimalTestUser = function(username) {
	var argLength = arguments.length;
	if (arguments.length > 1) {
		var otherArgs = [];
		for (var i = 1; i < argLength; i++) {
			otherArgs.push(arguments[i]);
		}
	} 
	return { 'username' : username, 'otherArgs': otherArgs };
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
	for(var animal in farm) {
		farm[animal].matches = [];
	}
}; // creates blank matches

var giveMatches = function(farm) {
	for(var animal in farm) {
		farm[animal].matches.push(farm[animal].friends[(Math.floor(Math.random() * farm[animal].friends.length))]);
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