process.argv;
var sum = 0;

for (var i = 0; i < process.argv.length; i++) {
  if(isNaN(process.argv[i]) === false) {
    sum += Number(process.argv[i]);
  }
}

console.log(sum);