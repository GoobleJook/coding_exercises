function greeting(hellosLeft) {
	if (hellosLeft == 1) {
		console.log("Hi! I'm going to say this " + hellosLeft + " more time!");
	} else {
		console.log("Hi! I'm going to say this " + hellosLeft + " more times!");
	}
};

for (var i = 10; i > 0; i--) {
	greeting(i);
}