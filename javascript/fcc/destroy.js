// This function creates an array of the arguments provided destroyer, then
// it filters the array by checking each element in the array against the elements in the
// arguments. If the element is not in the arguments (=== -1), it returns false, which removes // it.

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function(item) {
    console.log(item);
    return args.indexOf(item) === -1;
  });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);