# #Nizar hints

# # start with only one exit per room
# Rooms in array -- duh
# # Classes (broken down by behaviors and information):

# class Room

# information:
# description
# exits
# item
# hint?

# actions:


# =====================================

# Game
# Information:

# Location 
# Description
# Exit
# Object in room

# Behavior:

# Movement
# Starting game
# end

# =======================================

# Getting input from user

require 'pry'

class Room
	def initialize(exit, description, object, position)
		@exit = exit
		@description = description
		@object = object
		@position = position
	end

	def description
		puts "#{@description} #{@object} There is an exit to the #{@exit}."
	end

	def exit?(direction)
		@exit == direction
	end

	def object?
	end

	def position=(position)
		attr_accessor :position
		@position = position
	end
end

class Game
	def start_game

	end

	def movement
	end

	def interact
	end
end

room1 = Room.new("north","This is a room.","There is a large chest in the corner.", [0,0] )
room1.description

binding.pry
# class Room

# 	def initialize (exit, description)
# 		@exit = exit
# 		@description = description
# 	end
# end


# class Game
# 	attr_reader :rooms
	
# 	def initialize (rooms)
# 		@rooms = rooms
# 	end

# 	def location
# 		attr_reader :start, :current
		
# 		def initialize (start, rooms)
# 		@start = rooms[0] 
# 		@current = rooms[0]
# 		end
# 	end

# 	def prompt_user
# 		attr_reader :response
		
# 		def initialize
# 			@response = response
# 		end
# 	end


# 	def movement
# 		@location = current

# 	end

# 	def prompt_user

# 	end
	
# 	def describe_room
# 		def initialize (description)
# 			@description = @current.description
# 		end

# 		@current.description
# 		# puts "The exit is to the #{@current.exit}"
# 	end
# end

# room0 = Room.new("N", "You're standing in a dark room. There is an exit to the north.")
# room1 = Room.new("W", "You're in a dark room. Exits: West")
# room2 = Room.new("N", "You're here")
# room3 = Room.new("E", "Here you are...")
# rooms = [room0, room1, room2, room3]

# game = Game.new(rooms)
# binding.pry
