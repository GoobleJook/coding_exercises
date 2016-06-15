console.log("START\n")

var fs = require("fs");

//anonymous could make sense here...

fs.readFile("file.txt", "utf8", function (error,content){
	console.log("DONE READING FILE\n");
	if(error) {
		console.log("ERROR");
		console.log(error);
	} else{
		console.log(content);
		
	}
	
	
});

console.log("END");

// rewrite with named function