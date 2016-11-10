# playing with importing libraries

import random, sys

# print 'Jimmy Five Times' 5 times
print('My name is')
for i in range(5):
	print('Jimmy Five Times (' + str(i) +')')

# Note: break and continue only work in for or while loops

# Create a program to loop through 0 - 100 and add them together, a la Gauss
total = 0
for num in range(101):
  total += num
print(total)

# The same can be done using a while loop, although the book says that the for loop is more accurate
num = 0 
total = 0
while(num <= 100):
  total += num
  num += 1
print(total)

# Playing with random numbers -- Should print 5 random numbers between 1 - 10
for num in range(5):
  print(random.randint(1,10))

# Playing with sys.exit()

while True:
  print("Type 'exit' to exit.")
  response = input()
  if response == 'exit':
    sys.exit()
  print('You typed ' + response + '.')