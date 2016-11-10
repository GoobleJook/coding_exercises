# an annoying while loop in the style of the original "Adventure" game. "Kill the dragon? What?! With your bare hands?"

name = ''
while name != 'your name':
	name = input('Please enter your name: ')
	print('Nice to meet you, {}.'.format(name))
print('There you go, \'your name\', you finally got it. \'Member \'Adventure\'?')