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