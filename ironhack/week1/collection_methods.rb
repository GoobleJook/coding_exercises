class Home
	attr_reader(:name, :city, :capacity, :price)

	def initialize(name, city, capacity, price)
		@name = name
		@city = city
		@capacity = capacity
		@price = price
	end
end

homes = [
	Home.new("Nizar's place", "San Juan", 2, 42),
	Home.new("Fernando's place", "Seville", 5, 47),
	Home.new("Josh's place", "Pittsburgh", 3, 41),
	Home.new("Gonzalo's place", "Malaga", 2, 45),
	Home.new("Ariel's place", "San Juan", 4, 49)
]

# How would I loop through the array and print the name of each home?
homes.each { |home| 
	puts home.name
}

puts "\n\n"

# Use the each method to print more information about each home. 

homes.each { |home|
	puts "#{home.name} in #{home.city}"
	puts "Price: $#{home.price} a night\n\n"
}

# using .map
# each works, but map is more preferred

cities_each = []

homes.each { |hm|
	cities_each.push(hm.city)
}

puts "Made with .each method"
puts cities_each
puts "\n"

# Preferred method of using .map, which takes an array and returns
# a second array of new items
cities_map = homes.map { |hm|
	hm.city 
}

puts "Made with .map method"
puts cities_map
puts "\n"

# Map the array of homes into an array of their prices. Use that array of prices
# to get the average price of homes. What collection method should you use for 
# the average?

homes_prices = homes.map { |hm|
	hm.price
}

# go through, add prices, divide by number of 
homes_prices.each { | | 
} 


# How would I loop through and array and print all attributes of each home?
