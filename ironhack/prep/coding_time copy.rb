#Coding Time!

"""
Code a program to solve the following problem: We need a software for the next 
hackshow to manage the apps that the students will make during the iOS bootcamp 
The data we are interested in is: name of the app, author, OS of the app, and the 
score obtained.
"""

# Iteration 1: We need a method to get all the data from the object in a string.
# app = App.new “ILoveApples”, “Richard Stallman”, “iOS”, 8
# app.description
# > Richard Stallman has developed ILoveApples for iOS and he has got 8 points

# Iteration 2: Replace the numeric score by a literal. But the object constructor is the
# same as the previous exercise. We create objects with numerical score but the output is
# a literal. Score Range [ 0 - 4 ] -> Poor [ 5 - 6 ] -> Good [ 7 - 9 ] -> Very Cool [ 10 ] -> Awesome

# Iteration 3: Add a method to compare the score between two apps and it also returns the app with higher value.

require 'pry'

class App
	def initialize(app, name, os, pts)
		@app = app 
		@name = name
		@os = os
		@pts = pts
	end

	def evaluation
		if @pts > 0 && @pts <5
			points = "Poor"
		elsif @pts < 7
			points = "Good"
		elsif @pts < 10
			points = "Very Cool"
		elsif @pts == 10
			points = "Awesome"
		else
			points = "Not a Valid Number"
		end
		puts "#{@name} has developed #{@app} for #{@os} and he has got #{points} points"
	end


	def description
		puts "#{@name} has developed #{@app} for #{@os} and he has got #{@pts} points"
	end

	def compare(other_app)
		if @pts > other_app.pts
		    puts "#{@app} is better than #{other_app.app}"	
		else
			puts "#{other_app.app} is better than #{@app}"	
		end
		#rewrite using <=> operator?
		# @app 
	end
end

app = App.new("ILoveApples", "Richard Stallman", "iOS", 8)
other_app = App.new("SmashingCandies", "steve Ballmer", "iOS", 6)
app.description
app.evaluation
other_app.evaluation
app.compare(other_app)
