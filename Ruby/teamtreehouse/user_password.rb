class Prompter
  attr_accessor(:username, :password)

  # No initializer
  # We are going to get the values from gets

  def prompt
    puts "Username:"
    @username = gets.chomp

    puts "Password:"
    @password = gets.chomp
  end
end

class Authenticator
  def initialize(correct_username, correct_password)
    @correct_username = correct_username
    @correct_password = correct_password
  end

  def compare?(input_username, input_password)
    if input_username == @correct_username && input_password == @correct_password
      true
    else
      false
    end
  end
end

class WordCounter
  def initialize(words)
    @words = words
  end

  def count
    words_arr = @words.split(" ")
    words_arr.length
  end
end


my_prompter = Prompter.new
my_prompter.prompt

puts "\n"

nizars_auth = Authenticator.new("khalifenizar", "swordfish")
result = nizars_auth.compare?(my_prompter.username, my_prompter.password)

if result == true
  puts "\nCORRECT! Now give me some text:"
  words = gets.chomp

  my_counter = WordCounter.new(words)
  puts "\nYour text has this many words:"
  puts my_counter.count
else
  puts "BAAAAD. GET OUTTA HERE."
end


# # if username and password are correct

# puts "\nYou've entered 12 words."


# # if username and password are INCORRECT
# puts "GET OUTTA HERE"
