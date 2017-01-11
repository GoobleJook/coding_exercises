// process.argv; -- unnecessary, called in for loop
var sum_of_argv_numbers = 0;

for (var i = 0; i < process.argv.length; i++) {
  if(isNaN(process.argv[i]) === false) {
    sum_of_argv_numbers += Number(process.argv[i]);
  }
}

console.log(sum_of_argv_numbers);

// Their solution below seems brittle to me, as i is hardcoded but mine detects when the array item is a not NaN
// var result = 0
    
//     for (var i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i])
//     }
    
//     console.log(result)
