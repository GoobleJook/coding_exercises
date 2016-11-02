people = ['Dr. Robert Hernandez', 'Dr. Shelly Baer', 'Dr. Paul Hernandez']

def split_title_and_name(person):
	return person.split()[0] + ' ' + person.split()[-1]

for person in people:
	print(split_title_and_name(person) = (lambda x: x.split()[0] + ' ' + x.split()[-1])(person))


print(list(map(split_title_and_name, people)) == list(map(lambda person: person.split[0] + ' ' + person.split()[-1], people)))
