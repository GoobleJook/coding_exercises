// Josh's

var fs = require('fs');

function slidePrinter(error, content) {
	if (error) {
		console.log("You have an error");
		console.log(error);
	} else {
		var slides = content.split('----');
		
		slides.forEach(print(slide) 
		// { 
		// 	console.log (slide); 
		// });
	}
}

function print(slide) {
			console.log(slide);
		};
setTimeout(print, 10000);

fs.readFile('./slides.txt', 'utf8', slidePrinter);

// Mine (not wroking)
// var fs = require('fs');

// function slideLoader (file, callback) {
// 	function splitSlides (err, str) {
// 		if (err) {
// 			console.log('Oh no! error!', err);
// 		} else {
// 			var slides = str.split('\n----\n');
// 			callback(slides);
// 		}
// 	}
// 	fs.readFile(file, 'utf8', splitSlides);
// } 

// module.exports = slideLoader;