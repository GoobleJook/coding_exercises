# The continue statement causes a while loop to jump back to the start
# The break statement causes a while loop to exit

while True:
	print('Who are you?')
	name = input()
	if name != 'Joe':
		continue
	print('Hello, Joe. What is the password? (It is a fish.)')
	password = input()
	if password == 'swordfish':
		break
print('Access granted.')