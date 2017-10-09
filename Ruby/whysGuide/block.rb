kitty_toys = [
	{shape: 'sock', fabric: 'cashmere'},
	{shape: 'mouse', fabric: 'calico'},
	{shape: 'eggroll', fabric: 'chenille'}
]

puts "Here are the kitty toys, sorted by fabric:"
kitty_toys.sort_by { |toy| toy[:fabric]}.each do |toy|
	puts "The cat has a toy made of #{toy[:fabric]} in the shape of a #{toy[:shape]}!"
end

puts "Here are the kitty toys, sorted by shape:"
kitty_toys.sort_by { |toy| toy[:shape]}.each do |toy|
	puts "The cat has a #{toy[:shape]} made of #{toy[:fabric]}"
end

non_eggroll = 0
kitty_toys.each do |toy|
	next if toy[:shape] == 'eggroll'
	non_eggroll += 1
end
puts "There are #{non_eggroll} non-eggroll-shaped toys"

puts "This will print each toy hash until it reaches on made with chenille fabric."
kitty_toys.each do |toy|
	break if toy[:fabric] == "chenille"
	p toy
end
