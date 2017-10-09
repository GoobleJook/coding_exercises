var a = 0;

function getB() {
  return 1;
}

function incrementA() {
  var b = getB();
  a = a + b;
}

function incrementAThreeTimes() {
  incrementA();
  incrementA();
  incrementA();
}

console.log("a: ", a);
incrementAThreeTimes();
console.log("a: ", a);