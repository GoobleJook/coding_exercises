// pro tip: See Jalexy's code for how to break this into functions.
// JavaScript: break into functions
// Ruby: Break into classes/methods
// Don't endlessly bury/nest code; break it up and keep it simple.

var fs = require('fs'); // 1
var math = require('mathjs');

function fileActions(error, episodes) {
	if(error) 
		{
		console.log("Error, Murderface! Back the fuck off!");
		console.log(error); // 3
		} else 
		{
		var Pepisodes = JSON.parse(episodes);
		Pepisodes = Pepisodes.sort(function (a,b) 
			{
				return a.episode_number - b.episode_number;
			})
			for (n = 0; n < Pepisodes.length; n++) {
			var star = math.floor(Pepisodes[n].rating);
			var stars = "";
			
			for (i = 0; i < star; i++) {
				stars += "*";
		}; 
			console.log("Title: " + Pepisodes[n].title + "  Episode #: " + Pepisodes[n].episode_number);
			console.log(Pepisodes[n].description);
			console.log("Rating: " + Pepisodes[n].rating + " " + stars);
			}
	};
	} // 3


fs.readFile('./GoTEpisodes.json', 'utf8', fileActions); //2

// Jalexy

// var fs = require('fs');
// +
// +function fileActions(error, episodes){
// +	if(error){
// +		console.log("You have an error");
// +		throw(error);
// +	} else {
// +		var parsedEpisodes = JSON.parse(episodes);
// +		sortEpisodes(parsedEpisodes, episodePrinter);
// +	}
// +}
// +
// +function sortEpisodes(episodes, callback){
// +	var sortedEpisodes = episodes.sort(function(a, b){
// +		return a.episode_number-b.episode_number
// +	});
// +	callback(sortedEpisodes);
// +}
// +
// +function episodePrinter(episodes){
// +	episodes.forEach(function(episode){
// +		stars = starMaker(episode.rating)
// +		console.log("Title: " + episode.title + " | " + episode.episode_number);
// +		console.log(episode.description);
// +		console.log("Rating: " + episode.rating + " " + stars +  "\n");
// +	});
// +}
// +
// +function starMaker(rating){
// +	var stars = "";
// +	var rounded_rating = Math.floor(rating);
// +	for (var i = 0; i < rounded_rating; i++){
// +		stars = stars +  "*";
// +	}
// +	return stars;
// +}
// +
// +fs.readFile('./GoTEpisodes.json', 'utf8', fileActions);