import random

# generate a random number from 1 - 10
secret_num = random.randint(1, 10)
guesses = []

while True:
  # Get a number guess from a player
  guess = int(input('Guess a number between 1-10: '))
  if guess in guesses:
    print('You\'ve used that already!')
    print('Please try a different number.')
    continue
  else:
    guesses.append(guess)
  
  # Compare guess to secret number
  if guess == secret_num:
    print('You got it! My number was {}'.format(secret_num))
    break
  elif guess < secret_num:
    position = "higher"
  else:
    position = "lower"
  
  print("That's not it. My number is {} than {}.".format(position,guess))
  print('Please try again.')

