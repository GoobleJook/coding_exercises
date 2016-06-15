<!-- Three important jQuery methods for Ajax requests
.get()
.post()
.ajax() -->

<!-- Get request, using .ajax():
$.ajax({
	url: 'https://ironhack-characters.herokuapp.com/characters',

	data: '',

	success: handleCharacters, // do something with this response

	error: function () {
		console.log('error!')
	},

	dataType: 'json'
});

Post request, using .ajax():
$.ajax({
	type: "POST",
	url: "https://ironhack-characters.herokuapp.com/characters",
	data: newCharacters, // the object where we saved our data
	success: onSaveSuccess, // success handler
	error: function () {
		console.log('error!')
	},
	dataType: "json"
});

.Get() request
$.get('https://ironhack-characters.herokuapp.com/characters');
// $.get(url [,data][,success][,dataType] -->

var character = {
	name: "Han Solo",
	occupation: "Smuggler"
}

function handleCharacters(characters) {
	console.debug("Found characters: " + characters)
}

$.get('https://ironhack-characters.herokuapp.com/characters', character, handleCharacters,'json');
