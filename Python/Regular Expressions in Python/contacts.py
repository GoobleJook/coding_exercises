

import re

# """ A better way that chunks data and closes when finished """
# with open("names.txt") as open_file:
# 	names = open_file.read()

names_file = open("names.txt", encoding="utf-8")
names = names_file.read()
names_file.close()


# # only matches at beginning of string
# print(re.match(r'Love', names)) 

# # So this won't find match, since 'Love' is beginning of string
# print(re.match(r'Kenneth', names))

# # This works
# print(re.search(r'Kenneth', names))

# # Will also accept variables
# first_name = r'Kenneth'
# last_name = r'Love'

# print("Using variables")
# print(re.search(first_name, names))
# print(re.search(last_name, names))

# Getting phone number and area code:
# My Solution:

# print(re.search(r'\W\d\d\d\W \d\d\d-\d\d\d\d', names))

# KL Soultion:
# print(re.search(r'\(\d\d\d\) \d\d\d-\d\d\d\d', names))

# My solution to matching first name, last name, and phone number

# print(re.search(r'\w+, \w+',names))
# print(re.search(r'\W\d+\W\s\d+-\d+',names)) 

# # KL's solution
# print("Ken's solution")
# print(re.findall(r'\w*, \w+', names))
# print(re.findall(r'\(?\d{3}\)?\-?\s?\d{3}-\d{4}', names))

# find email addresses

# KL solution
print("Kenneth Love Solution:")
print(re.findall(r'[-\w\d+.]+@[-\w\d.]+', names))
print("\n\n\n")

# RH Solution
print("Robert Hernandez Solution")
print(re.findall(r'[-\w+.]+@[-\w\d.]+', names))

# Print out all occurences of 'treehouse'
# print(re.findall(r'\b[trehous]{9}\b', names, re.I))