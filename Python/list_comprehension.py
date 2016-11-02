even_numbers = []
for number in range(0, 1000):
	if number % 2 == 0:
		even_numbers.append(number)

print("This is a list of even numbers generated in the traditional manner\n{}".format(even_numbers))

even_numbers_with_comprehension = [number for number in range(0, 1000) if number % 2 == 0]
print("This is a list of even numbers generated using list comprehension\n{}".format(even_numbers_with_comprehension))



doctors_in_room = []
people_in_room = ['Dr. Robert Hernandez', 'Mrs. Shelly Baer', 'Mr. Paul Hernandez', 'Dr. Philippe Houdard']

for person in people_in_room:
	if person.split()[0] == 'Dr.':
		doctors_in_room.append(person)

print("This is a list of doctors in the room, found using a for loop: {}".format(doctors_in_room))

people_in_room_with_comprehension = [person for person in people_in_room if person.split()[0] != "Dr."]
print("This is a list of people in the room who aren't doctors, found using list comprehension: {}".format(people_in_room_with_comprehension))


def times_tables():
	lst = []
	for i in range(0,10):
		for j in range(0,10):
			lst.append(i*j)
	return lst

print("Here are the times tables using loops: {}".format(times_tables()))

lst2 = [i*j for i in range(10) for j in range(10)]
print("Here is the times tabes using list comprehension:{}".format(lst2))


""" Create a list (using comprehension) of all possible student IDs. Student IDs are created by two letters
followed by two numbers. """

lowercase = 'abcdefghijklmnopqrstuvwxyz'
digits = '0123456789'

answer = [a + b + c + d for a in lowercase for b in lowercase for c in digits for d in digits]
print("The possible student IDs are: {}".format(answer))