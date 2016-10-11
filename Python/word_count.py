# E.g. word_count("I am that I am") gets back a dictionary like:
# {'i': 2, 'am': 2, 'that': 1}
# Lowercase the string to make it easier.
# Using .split() on the sentence will give you a list of words.
# In a for loop of that list, you'll have a word that you can
# check for inclusion in the dict (with "if word in dict"-style syntax).
# Or add it to the dict with something like word_dict[word] = 1.
def word_count(my_string):
    my_dict = {}
    my_list = my_string.lower().split()
    for word in my_list:
      if word not in my_dict:
        my_dict[word] = 1
      else:
        my_dict[word] += 1 
    print(my_dict)

word_count('I am that I am')        
