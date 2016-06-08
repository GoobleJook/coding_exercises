# CLI prompts for user and password
# If password correct, program accepts input
# Program counts number of words

# Password can be hardcoded into code

require 'pry'

class Authenticator
	# takes user-input creds (don't forget to downcase) and compares to hardcoded values
	# if correct, allows access to the word counter. 
	# if incorrect, inform and prompt
	# advanced: Only allow 3 attempts to authenticate per username

	def initialize
		@users = [{ "nizar" => "pizza" },{ "josh" => "primus" },{ "robert" => "wife" }]
		@accepted = false
	end

	def authenticate
		if @accepted == false
			puts "> enter your username, please: "
			@user = gets.chomp
			puts "> enter your password, please: "
			@pass = gets.chomp
			
			@users[user.each | num | puts "#{user[num][user]}"]
			# if pass == @users[user]
			# 	puts "Success!"
			# else
			# 	puts "Failure!"
			# end
		else
			#call WordCounter
		end

	


		#@users.each { | name | puts name["nizar"]   }

	end


	
end

class WordCounter
	# prompts user for input, accepts user input and counts number of words
end

test = Authenticator.new
test.authenticate