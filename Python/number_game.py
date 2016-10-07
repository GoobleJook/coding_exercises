import random

# generate a random number from 1 - 10
secret_num = random.randint(1, 10)
guesses = []
num_guesses = 0
guess_limit = 5

while num_guesses < guess_limit:
  # Get a number guess from a player
  print ("You have {} guess(es) remaining".format(guess_limit - num_guesses))
  guess = int(input('Guess a number between 1-10: '))
  if guess in guesses:
    print('You\'ve used that already!')
    print('Please try a different number.')
    continue
  else:
    guesses.append(guess)
  
  # Compare guess to secret number
  if counter == guess_limit:
    Print("You've run out of guesses!")
    break
  if guess == secret_num:
    print('You got it! My number was {}'.format(secret_num))
    break
  elif guess < secret_num:
    position = "higher"
  else:
    position = "lower"
  
  print("That's not it. My number is {} than {}.".format(position,guess))
  print('Please try again.')
  num_guesses += 1

