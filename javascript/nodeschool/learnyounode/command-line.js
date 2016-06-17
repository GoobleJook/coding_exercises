var cli = process.argv;
var sum = 0;

for (i = 2; i < cli.length; i++) {	
	sum += +cli[i];
}

console.log(sum);

// Official solution:
// var result = 0;

// for (var i = 2; i < process.argv.length; i++)
// 	result += Number(process.argv[i])

// console.log(result)