var nums = '80:90:70:100';


function averageColon(numbers){
	var num_arr = numbers.split(":");
	var sum = 0;
	for ( var i = 0; i < num_arr.length; i++ ) {
		sum += Number(num_arr[i]);	
	}
	var avg = sum/num_arr.length;
	return avg;
}

result = averageColon(nums);
console.log("The average of all the numbers in the array is " + result + "!");