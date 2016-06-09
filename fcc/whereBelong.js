// this function sorts an array and searches for where a num would belong, between an elements of lesser and
// greater values. It the returns the index of where we would insert this element.

function getIndexToIns(arr, num) {
  var sortedArr = [];
  
  function compareNumbers(a, b) {
    return a - b;
  }
  
  sortedArr = arr.sort(compareNumbers);
  for (var i = 0; i < sortedArr.length; i++) {
    if(num <= sortedArr[i]) {
      return i;
    } 
  } return sortedArr.length; //assumes that if the element is larger than all elements in the array that it belongs in a new, last element.
}

getIndexToIns([40, 60], 50);
