var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x){
  return x * 2; 
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

//ES6 example
const numbers = [2, 4, 8, 10];
var halves = numbers.map(x => x / 2);
// halves is [1, 2, 4, 5]
var doubles = numbers.map(x => x * 2);
// doubles is [4, 8, 16, 20]

var numbers = [1, 4, 9];
var roots  = numbers.map(Math.sqrt);
// roots is now[1, 2, 3]
// numbers is unchanged

var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(obj){
  var rObj = {};
  rObj[obj.key] = obj.value
  return rObj;
})

// reformattedArray = [ { '1': 10}, {'2': 20}, {'3': 30} ]

// the reduceRight() method applies a function against an accumulator and each value of the array
// (from right to left) to reduce it to a single value.

var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a,b){
  return a.concat(b);
}, []);

// flattened is [4, 5, 2, 3, 0, 1]

[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  console.log(`previousValue: ${previousValue}`);
  console.log(`currentValue: ${currentValue}`);
  console.log(`index: ${index}`);
  console.log(`array: [0, 1, 2, 3, 4]`);
  console.log(`return value: ${previousValue + currentValue}`)
  return previousValue + currentValue;
});

// if not otherwise explained in comments, run the code in Node, like with the above snippet
