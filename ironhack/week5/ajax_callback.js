function handleCharacters (characters) {
	console.log('REQUEST DONE', characters)
};

var request = $.get('https://ironhack-characters.herokuapp.com/characters');
request.done(handleCharacters);