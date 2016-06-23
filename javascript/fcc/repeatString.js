// ths runction repeats a string "num" times, as long as num is a non-negative number.
// Otherwise it returns an empty string.

function repeatStringNumTimes(str, num) {
  if (num >= 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
