# an annoying while loop in the style of the original "Adventure" game. "Kill the dragon? What?! With your bare hands?"
# ruined with a break statement


name = ''
while name != 'your name':
	name = input('Please enter your name: ')
	print('Nice to meet you, {}.'.format(name))
	break