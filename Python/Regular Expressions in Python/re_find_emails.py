import re

def find_emails(names):
	""" Create a function named find_emails that takes a string.
	Return a list of all of the email addresses in the string. """
	return re.findall(r'[-\w+.]+@[-\w\d.]+', names)

print(find_emails("rob@rob.com shel@shel.com steve@steve.com"))