# Create a function named stringcases that takes a string 
# and returns a tuple of four versions of the string: uppercased, 
# lowercased, titlecased (where every word's first letter is 
# capitalized), and a reversed version of the string.

def stringcases(a_string):
  up = a_string.upper()
  low = a_string.lower()
  tit = a_string.title()
  rev = a_string[::-1]
  tup = (up, low, tit, rev)
  return tup



print(stringcases('string'))