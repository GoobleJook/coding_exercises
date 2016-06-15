
// from notes
// 1. Left shift by 3 characters
// 2. Tips:
// var b = 'Bullshit';

// console.log(b.charCodeAt(1));

// var c = 118;
// console.log(String.fromCharCode(c));

// 3. Loop, bonus points for .map

// Iteration #1

function caesarCipher (message) {
	var string_mess = message.split(" ");
	var string_code = string_mess.map(function (code) {
			for (i = 0; i < string_code.length; i++ ) {
				code[i] = code[i].charCodeAt[0] - 3;
			}
		return code;
	});
}

var encrypted = caesarCipher("Man, oh Man, don't I love what I do love!")




// from lecture



// Notes from lecture
// // Steps involved
// // write function that takes an array of words
// // will need two variables, index and secretMessage
// // Iterate through all words using a for loop
// // retrieve character we want and add it to secretMessage

// function decode (wordList) {
// 	var index = 0;
// 	var secretMessage = "";


// 	wordList.forEach (function (word) {
// 			secretMessage += word[index];
// 			index ++;
// 			if ( index === 5){
// 				index = 0;
// 			}
// 		});
// 	return secretMessage;
// }

// var words, message;

// words = [
// 	"dead",
// 	"bygone",
// 	"landing",
// 	"cheaply",
// 	"assumed",
// 	"incorrectly",
// 	"attention",
// 	"agent"
// ];

// var words2 = [
//   "January", "lacks", "caveats", 
//   "hazardous", "DOORS", "crying",
//   "arrogantly", "climate", "proponent",
//   "rebuttal"
// ];

// message = decode(words);
// console.log(message);
// message2 = decode(words2);
// console.log(message2);