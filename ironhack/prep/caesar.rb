# We're going to start by writing a function to solve a Caesar Cipher 
# of with a left shift of 1. So we'll need to write a function that 
# takes the encrypted message (just one word) and returns the 
# unencrypted message.

require 'pry'

def solve_cipher(input, shift)
	word = input
	length = word.length - 1
	code = ""
	(0..length).each do |i|
		char = word[i].ord + shift
		if word[i] == ' '
			code = code + ' '
		elsif char > "z".ord
			(char + shift - 26).chr
		elsif char > "Z".ord && word[i].ord <= "Z".ord
			(char + shift - 26).chr
			
		
		end
	end
	puts "Untranslated: #{input}"
	puts "Translaged: #{code}"
end

solve_cipher("Zis shit", 3)
solve_cipher("Zis shit", -3)
