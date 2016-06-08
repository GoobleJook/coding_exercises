
class ATV
	attr_accessor(:sound, :wheels)

	def initialize(sound)
		@sound = sound
		@wheels = 4
	end
end

class Tricycle
	attr_accessor(:sound, :wheels)

	def initialize(sound)
		@sound = sound
		@wheels = 3
	end
end

class Semi
	attr_accessor(:sound, :wheels)

	def initialize(sound)
		@sound = sound
		@wheels = 18
	end
end

class WheelCounter
	attr_accessor (:vehicles)

	def initialize(vehicles)
		@vehicles = vehicles
	end

	def count
		counter = 0
		@vehicles.each { | veh | counter += veh.wheels }
		counter
	end
end

class SoundPrinter
	attr_accessor (:vehicles)

 	def initialize(vehicles) 		
 		@vehicles = vehicles
 	end

 	def sound
 		@vehicles.each { | veh | puts "My sound is #{veh.sound}" }
 	end
 end

atv = ATV.new("Vroom Vroom Vroom")
atv2 = ATV.new("Broom Broom Broom")
bubbaBot = Tricycle.new("hubba hubba")
mac = Semi.new("BOOOM BOOOM I'm A BIG ASSHOLE") 

vehicle_array = [ atv, atv2, bubbaBot, mac ]

counter = WheelCounter.new(vehicle_array)
puts counter.count

sound = SoundPrinter.new(vehicle_array)
sound.sound




