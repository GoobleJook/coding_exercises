import random

guess = ''
word_to_reveal = ''
words = ['apple','bacon','cat','metal','pussy','asshole']
guesses = 5

word_to_guess_str = words[random.randint(0, len(words)-1)]
word_to_guess_arr = list(word_to_guess_str)
word_length = len(word_to_guess_arr)
word_to_reveal_arr = ['-'] * len(word_to_guess_arr)

while guesses > 0:  
  def start_game():
    global guesses, guess
    print("You have {} guesses remaining. Your word to guess is {} letters long.".format(guesses, word_length))
    guess = input("Enter your guess: ")
    play_game()

  def play_game():
    global guesses,word_to_reveal
    for letter in word_to_guess_arr:
      if letter == guess:
        correct = word_to_guess_arr.index(letter)
        word_to_reveal_arr.pop(correct)
        word_to_reveal_arr.insert(word_to_guess_arr.index(letter), letter)
        print("You got one! You have {} guesses remaining!".format(guesses))
        print("Here is your word:")
        print(word_to_reveal_arr)
        start(game)
      else:
        print("You missed it! You have {} guesses remaining!".format(guesses))
        print("Here is your word:")
        print(word_to_reveal_arr)
        guesses = guesses -1
        start_game()
    if '-' not in word_to_reveal_arr: 
      print ("You win!")
print("You've run out of guesses -- You lose!")

start_game()
  