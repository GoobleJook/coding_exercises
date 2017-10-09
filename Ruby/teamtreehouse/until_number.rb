def print_hello(number_of_times)
	i = 0
	until i >= number_of_times
		puts "Hello!"
		i += 1
	end
end

answer = ""

while answer != "quit"
	print "How many times do you want me to say hello? (Type 'quit' to exit): "
	answer = gets.chomp
	break if answer == "quit"
	print_hello(answer.to_i)
end
