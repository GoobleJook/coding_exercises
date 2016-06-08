# Iteration #1: prints numbers from 1 - 100, for multiples of 3, print "Fizz",
# for multiples of 5, print "Buzz", for multiples of 3 and 5, print "FizzBuzz"


number = 1
while number <= 100
	if number % 3 == 0 && number % 5 == 0
		puts "FizzBuzz"
	elsif number % 3 == 0
		puts "Fizz"
	elsif number % 5 == 0
		puts "Buzz"
	else
		puts number
	end
	number += 1
end
puts "That was iteration #1, using a while loop"

# iteration # 2
# use a loop to populate an array with numbers 1 - 100
# use #each to go through the array and produce results as above

# populate the array of numbers; too lazy to type it in

numbers = []
i = 1
while i <= 100
	numbers.push(i)
	i+=1
end

for num in numbers
	if num % 3 == 0 && number % 5 == 0
		puts "FizzBuzz"
	elsif num % 3 == 0
		puts "Fizz"
	elsif num % 5 == 0
		puts "Buzz"
	else
		puts num
	end
end
puts "That was iteration #2, using for loop"

# iteration 3
# add new condition so if number starts with a 1, add "Bang"
for num in numbers
	if num % 3 == 0 && num % 5 == 0 && num.to_s.start_with?("1")
		puts "FizzBuzzBang"
	elsif num % 3 == 0 && num.to_s.start_with?("1")
		puts "FizzBang"
	elsif num % 5 == 0 && num.to_s.start_with?("1")
		puts "BuzzBang"
	elsif num.to_s.start_with?("1")
		puts "Bang" 
	elsif num % 3 == 0 && number % 5 == 0
		puts "FizzBuzz"
	elsif num % 3 == 0
		puts "Fizz"
	elsif num % 5 == 0
		puts "Buzz"
	else
		puts num
	end
end
puts "That was iteration #3, adding conditionals for Bang"

# iteration #4: refactoring
for num in 1..100
	result = ""
	if num % 3 == 0
		result += "Fizz"
	end
	if num % 5 == 0
		result += "Buzz"
	end
	if num % 3 != 0 && num % 5 != 0
		result = num
	end
	puts result
end

puts "That was iteration #4, refactored"