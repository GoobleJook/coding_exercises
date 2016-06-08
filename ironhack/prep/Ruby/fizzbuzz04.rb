# It’s getting harder and harder to add new conditions! An endless chain of elsif 
# conditions is messy and difficult to maintain. Rewrite your code to make it simpler 
# (this is called “refactoring”).

# Start by deleting all of the if/elsif/else from your loop. Create a variable inside
# your loop that represents the number or string that will be printed. We can call it result.
# For now, it will just be an empty string.



for n in 1..100
	result = ""
	if n % 3 == 0
		result << "fizz"
	if n % 5 == 5
		result << "buzz"
	if n.to_s.start_with?("1")
		result << "bang"
	if n % 3 !== 0 && n %5 !== 0 && n.to_s.!start_with?("1")
		result << n
	puts result
end

