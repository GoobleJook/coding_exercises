
class Team
	attr_accessor :location, :team_name
	def initialize (owner, location, team_name)
		@owner = owner
		@location = location
		@team_name = team_name
		@players = {
			:wr1 => Player.new("This ugy", 31, 300000),	
			:qb => Player.new("That guy", 0, 3000000)
		}
	end
	
	def sign_player(player) #how would I add to hash?
		puts "#{@team_name} signed #{player.name} for #{player.salary}"
		@players[player.position] = player 
	end

	def play_game(team)
		#The Pittsburgh Steelers are taking on the Cincinnti Bengals
		puts "#{@team_name} is playing #{team.team_name}"
		@players.each { |key, player| player.make_play }
	end
end


# football team
# ----- atributes -----

# name 
# position
# number
# string
# salary
# years played

# ----- actions -----



class Player 
	attr_accessor :name, :salary, :position

	def initialize(name, position, salary) #is position necessary, or can I use hash key?
		@name = name
		@position = position
		@salary = salary
	end

	def make_play
		puts "#{@name} is playing #{@position}"
	end	
end


# ----- atributes -----

# owner
# location
# name
# players


# ----- actions -----

# trading


steelers = Team.new("Phillip Buchanon", "Pittsburgh", "Steelers")
bengals = Team.new("Jim Guy", "Cincinnati", "Bengals")
player1 = Player.new("Guy", "WR", 1000000000)
steelers.sign_player(player1)

steelers.play_game(bengals)
