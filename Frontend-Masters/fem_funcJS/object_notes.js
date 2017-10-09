// var box = {}; // object literal

// box.material = "cardboard"; // dot notation

// // box.material == box["material"] // cardboard

// function func() {
// 	return "material";
// };

// var key = "material"
// console.log(box[func()]); // "cardboard" -- bracket notation can handle expressions, dot notation can't
// // box.key will be undefined, because dot notation is equivalent to using bracket with quotes (ie string)
// box[key] //will work 
// // box['key'] won't

// Rules of dot notation:

// strings - yes
// numbers - no
// quotations - no
// weird characters - no
// expressions - no

// Bracket notation ("" means requires quotes)
// strings - "yes"
// weird characters - "yes"
// variables - yes
// numbers - yes
// expressions - yes

// Looping objects

var box = {
	material: 'cardboard',
	0: 'meow',
	'^&*': 'testing 123'
};

console.log(box)

for(var key in box) {
	console.log("The value of " + key + " is " + box[key]);
};