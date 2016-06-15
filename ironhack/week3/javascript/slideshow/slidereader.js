var fs = require('fs');
var size = require('window-size');
var math = require('mathjs');




function slidePrinter(error, slides) {
	if (error) {
		console.log("You have an error. What, are you stupid?");
		console.log(error);
	} else {
		var slides = slides.split('----');
		var space = "";
		slides.forEach(function(slide) {
			var term_Length = size.length -slide.length;
			var term_width = size.width - slideLength;
			var center = 
			for(i = 0; i < height; i++) {
				space += "\n";
			}
			console.log(space);
			console.log(slide);
		});
	}
}


fs.readFile('./slides.txt', 'utf8', slidePrinter);

// Josh's

// var size = require("window-size");



// // notes
// // 1. display the text in each slide '---' separator
// // 2. Display > to prompt user for input
// // 3. User can enter either "next" or "back"; "next" cannot advance past last slide, "back" can't go past first
// To center text vertically, figure out window height, divide by 2, and add /n's to that number
// To center text horizontally, fighure out length of word and width of window, subtract length of word, divid by two, and loop through adding that number of spaces

// steps performed:
// 1. Installed window-size (npm i window-size --save)

// var size = require('window-size');

// console.log (size.height); 
// console.log (size.width);

// reveals 80 x 24



// function center(word) {
// 	for (see above)
// }

// for (i =0; i < size.height/2; i++) {
			// 	console.log('\n');
			// 	console.log(slide); //This would be a great place for an asynchrony pause
			// };