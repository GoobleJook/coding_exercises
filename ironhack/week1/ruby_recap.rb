# p vs print vs puts
# print - same line
# puts - new line
# p - puts variable.inspect

# Use double-quotes for strings (for now)

# Hash rocket in Hash (big arrow)
pizza = {
	:cheese => "Mozzi",
	:sauce => "Mar"
}

puts pizza[:sauce]

# or

godfather_movie_xlations = {
	english: "The Godfather",
	spanish: "Il Padrino"
}

puts godfather_movie_xlations[:spanish]

# nil, false, and "" are all falsey; rest are truthy in Ruby

# gets can add \n
# gets.chomp removes ONE \n from the end of string.

# IO.read("filename") returns contents of a file as a string
# IO.write("filename.ext", "replacement text")