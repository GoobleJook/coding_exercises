// create a function that checks if a thing is Pizza or cookies. 
// process.argv(node file.js ) -- Node trick from Nizar
// https://docs.nodejitsu.com/articles/command-line/how-to-parse-command-line-arguments

function foodChecker(food){
	if (food === "pizza") {
		console.log("Yay, pizza!");
	} else if (food === "cookies") {
		console.log("Cookies are good too.");
	} else {
		console.log("Okay, enjoy eating your " + food + "!");
	}
}

var foods = [ 'pizza', 'cookies', 'gummies'];

foods.forEach(function (food) {
	foodChecker(food);
});

var capsFoods = foods.map(function (food) {
	return food.toUpperCase();
})