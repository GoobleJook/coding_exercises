import re

def find_words(count,string):
	""" Returns a list of all the words in the string that are count word characters or longer """
	string_match = r'\w'*count+'+'
	return re.findall(string_match, string)

print(find_words(3,"This is a string with some words in it."))