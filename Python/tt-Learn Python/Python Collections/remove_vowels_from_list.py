# Write a script that takes for a word (or list of words), removes all of the vowels, and gives the word (or words) back.

# For example, if I give the script the word "Treehouse", I should get back "Trhs".


# MY SOLUTION:
def remove_vowels(word):
  # Loop through string. If letter is not a vowel, append it to a new string
  new_word = ""
  vowels = ['a','e','i','o','u']
  for letter in word:
    if letter not in vowels:
      new_word += letter
  print(new_word)

remove_vowels("Treehouse")

# TEACHER SOLUTION:
state_names = ["Ohio","Florida","Indiana","Illinois"]
vowels = list('aeiou')
output = []

for state in state_names:
  state_list = list(state.lower())

  for vowel in vowels:
    while True:
      try:
        state_list.remove(vowel)
      except:
        break
  output.append(''.join(state_list).capitalize())

print(output)
print(' '.join(output)) # my addition