// named, or anonymous -- a style difference

console.log ("START")

// named 
function shout () {
	console.log("AHHHHHHH");
}

setTimeout(shout, 10000);

console.log("END\n")


// anonymous -- only run one version at the same time for best results
// setTimeout(function () {
// 	console.log("AHHHHHHH");
// }, 10000);