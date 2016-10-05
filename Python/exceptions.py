try:
  count = int(input('Give me a number: '))
except ValueError:
  print("That's not a number!")
else:
  print("Hi" * count)

"""It is important to specify exception type"""