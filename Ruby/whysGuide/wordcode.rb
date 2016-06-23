require_relative 'wordlist'

# Get evil idea and swap in code words
print "Enter your new idea: "
idea = gets.chomp
@code_words.each do |real, code|
	idea.gsub!(real, code)
end

# Save the gibberish to a new file
print "File encoded. Please enter a name for this idea: "
idea_name = gets.strip
File::open( "idea-" + idea_name + ".txt", "w") do |f|
	f<<idea
end