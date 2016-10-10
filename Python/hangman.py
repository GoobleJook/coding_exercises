import random

guess = ''
word_to_reveal = ''
words = ['apple','bacon','cat','metal','pussy','asshole']
guesses = 5
word_to_guess_str = words[random.randint(0, len(words)-1)]
word_to_guess_arr = list(word_to_guess_str)
word_length = len(word_to_guess_arr)
word_to_reveal_arr = ['-'] * len(word_to_guess_arr)
print(word_to_guess_str)

while guesses > 0:  
    print("You have {} guesses remaining. Your word to guess is {} letters long.".format(guesses, word_length))
    guess = input("Enter your guess: ")
    if guess in word_to_guess_arr:
      correct = word_to_guess_arr.index(guess)
      word_to_reveal_arr.pop(correct)
      word_to_reveal_arr.insert(word_to_guess_arr.index(guess), guess)
      print("You got one! You have {} guesses remaining!".format(guesses))
      print("Here is your word:")
      print(word_to_reveal_arr)
    else:
      print("You missed it! You have {} guesses remaining!".format(guesses))
      print("Here is your word:")
      print(word_to_reveal_arr)
      guesses = guesses -1
    if '-' not in word_to_reveal_arr: 
      print ("You win!")
      break

print("You've run out of guesses -- You lose!")