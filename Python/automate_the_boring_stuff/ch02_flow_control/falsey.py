name = ''
while not name:   # This uses the Python logic that an empty string ('') is considered Falsey, that is, it is not True
  print('Enter your name:')
  name = input()
print('How many guests will you have?')
numOfGuests = int(input())
if numOfGuests: # THis uses the same logic: If numOfGuests is not 0 it is True, so it will execute the print statement
  print('Be sure to have enough room for your {} guests!'.format(numOfGuests))
else:
  print('Enjoy eating by yourself, loser!')