# #attributes of a spaceship (instance variables)
# size
# color
# max_speed
# material
# date_designed
# date built
# defensive rating

# behaviors of a spaceship (methods)
# fly
# land
# transport people
# jettison parts
# fire weapons

# often methods interact with variables

class Spaceship

	def initialize(size, max_speed, weight)
		@size = size
		@max_speed = max_speed
		@weight = weight
		@worlds_visited = []
	end

	def fly
		puts "You are airborne, flying at #{@max_speed} warps!"
	end

	def land(world)
		puts "You have landed, all #{@weight} tons of you!"
		@worlds_visited.push(world)
	end

	def worlds_visited
		@worlds_visited
	end
end

enterprise = Spaceship.new("big", 5, 2500)

puts enterprise.inspect

enterprise.fly
enterprise.land("Mars")
puts enterprise.worlds_visited.inspect

puts "Done with spaceships, on to cars..."

class Car
	attr_reader(:year, :make, :model, :powerful)

	def initialize(year, make, model, powerful)
		@year = year
		@make = make
		@model = model
		@powerful = powerful
		@cities_visited = []
	end

	
	# def cities_visited
	# 	@cities_visited
	# end

	def park(city)
		puts "You stopped in #{city}!"
		@cities_visited.push(city)
	end

#makes a method with the name of the desired return value
	# def cities_visited
	# 	@cities_visited
	# end


	def sound
		if @powerful == true
			puts "BROOOOOM"
		else
			puts "brooom"
		end
	end

	def self.double_sound(car)
		car.sound
		car.sound
	end
end

class Racing_car < Car
	def initialize(stripes, year, make, model, powerful)
		super(year, make, model, powerful)
		@stripes = stripes
	end
	def sound
		puts "BROOOMBROOM"
	end
end

my_car = Car.new(2015, "Segway", "X10", true)
puts "my_car sound"
my_car.sound

nizars_car = Car.new(2012, "Honda", "Fit", false)
puts "nizars_car sound"
nizars_car.sound


steves_car = Racing_car.new("Blue racing stripes", 2012,"Nissian","Altima", true)
steves_car.inspect
puts "steves_car sound"
steves_car.sound

puts "Double_sound class method"
Car.double_sound(my_car)

my_car.park("Miami")
my_car.park("Dayton")
puts "You have visited " + my_car.cities_visited.join(" and ")

# class variables keep track of all (global) class variable and start with @@
# class methods start with self