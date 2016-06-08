# this is a comment
puts "Hello, world!"

puts "I"
puts "like"
puts "pie."

print "Cookies "
print "are "
print "good "
puts "too." # puts includes a newline, print does not.

puts "Hello again!" 

multiline_string = """
In a galaxy far, far away...

Some crazy shit was happening and,
let me tell you, kid,
you were involved.

There was a princess in a slave dress,
laser guns, droids, and Jedi powers!

Pretty badass...
"""

print multiline_string

puts "Double-quotes allow use of\nescape sequences!"

puts 'Single-quotes\ndo not!'

intrp = "interpolated values"

puts "Double quotes and hashtag+curly brackets allow us to insert #{intrp} into strings."

# gets.chomp reads input as a string. .to_i method converts to integer
puts "What's your name, buddy?"
name = gets.chomp
puts "Well, hello, #{name}! Give me a number."
number1 = gets.chomp.to_i
puts "And another, please."
number2 = gets.chomp.to_i
puts "Well, #{name}, #{number1} times #{number2} = #{number1 * number2}"

# Reading and 
file_contents = IO.read("hello.rb")
puts "The source file contains: #{file_contents}"

# Writing Files
puts "What's your name?"
name = gets.chomp
IO.write('name.txt', name) # IO.write is a function that takes two arguments (name of 
	#to be created, and content of that file)

# .methods.sort returns availabile methods for object
"a string".methods.sort
x = "a string"
x.methods.sort

# show-doc shows documentation about a method
show-doc "a string".upcase

