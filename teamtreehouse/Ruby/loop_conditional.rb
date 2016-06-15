random_number = Random.new.rand(5)

loop do 
	print "Guess a number between 0 and 5 (e to exit): "
	answer = gets.chomp
	if answer == 'e'
		break
	elsif answer.to_i == random_number
		puts "YOU WIN! I was thinking of the number #{random_number}!"
		break
	else
		puts "Guess again, loser..."
	end
end