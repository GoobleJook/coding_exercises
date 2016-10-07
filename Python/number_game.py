import random

# generate a random number from 1 - 10
secret_num = random.randint(1, 10)

while True:
  # Get a number guess from a player
  guess = int(input('Guess a number between 1-10: '))
  # Compare guess to secret number
  if guess == secret_num:
    print('You got it! My number was {}'.format(secret_num))
    break
# print hit/miss
  print('That\'s not it')
