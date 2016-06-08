function averageColon(numbers) {
	var strArr = numbers.split(":");

	var numArr = strArr.map(function (strNum) {
		return Number(strNum);
	});

	var total = numArr.reduce(function (sum, number){
		return sum + number;
	});

	return total / strArr.length;
}

var numbers = "80:70:90:100";
var result = averageColon(numbers);

console.log(result)