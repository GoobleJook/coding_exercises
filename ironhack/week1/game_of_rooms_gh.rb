class Room
	attr_accessor :description, :exit

	def initialize(description, exit)
		@description = description
		@exit = exit
	end
end

class RoomCreator
	attr_accessor :rooms

	def initialize
		@rooms = create_rooms
	end

	def create_rooms
		room_arr = []
		room_array << Room.new

