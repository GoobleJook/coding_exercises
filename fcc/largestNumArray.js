function largestOfFour(arr) {
  
  var largestArr = [];
  for(var i = 0; i < arr.length; i++) {
    var largestNum = 0;
    for(var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      } 
    } largestArr.push(largestNum); 
  }
  return largestArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);