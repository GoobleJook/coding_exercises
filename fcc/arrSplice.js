// returns an array with howMany items removed from its head

function slasher(arr, howMany) {
  for (var i = 0; i < howMany; i++) {
    arr.splice(0, 1);
  }
  return arr;
}

slasher([1, 2, 3], 2);
