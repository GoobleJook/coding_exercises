// example 1 -- call later, using a timer
var closureAlert = function () {
	var x = "Help! I'm a variable stuck in a closure!";
	var alerter = function () {
		alert(x);
	};
	setTimeout(alerter,1000);
	console.log('will still run right after');
};

closureAlert(); // Should console 'will still...' then alert 'Help...'


// example 2 -- call later, manually using variable storage
var closureAlert2 = function(){
	var x = 0;
	var alerter = function(){
		alert(++x);
	};
	return alerter;
};

var funcStorer = closureAlert2(); // funcStorer is storing alerter definition with variable in scope
var funcStorer2 = closureAlert2();
funcStorer(); // should alert 1
funcStorer(); // will alert 2 because x is stored as 1
funcStorer2(); // should alert 1

//example 3 -- 
var add = function(num){
	var addToNum = function(num2){
		return num + num2;
	};
	return addToNum;
};

var add1 =  add(1); // can now add 1 to number arguments in future calls to add1
console.log(add1(2)); //should be 3
console.log(add1(4999)); //should be 5000

//example 4 -- also works with returning an object and its method(s)
function counter() {
	var n = 0;
	return {
		count: function() { return ++n },
		reset: function() { n = 0; }
	};
};

var myCounter = counter();
console.log(myCounter.count()); //1
console.log(myCounter.count()); //2
console.log(myCounter.count()); //3
myCounter.reset();
console.log(myCounter.count()); //1

//example 5
var sayAlice = function() {
	var makeLog = function() {
		console.log(alice);
	};
	var alice = 'Why hello there, Alice!';
	return makeLog;
};

var hello = sayAlice();
console.log(hello); // will return function definition
console.log(hello()); // will say hello to Alice (and undefined because console.log doesn't return anything)


//example 6 -- run code in console
var makeStopwatch = function() {
	console.log('initialized');
	var elapsed = 0;
	console.log(elapsed);

	var stopwatch = function() {
		console.log('stopwatch');
		return elapsed;
	};

	var increase = function(){ elapsed++ };
	setInterval(increase, 1000);

	return stopwatch;
};

var x = makeStopwatch();
