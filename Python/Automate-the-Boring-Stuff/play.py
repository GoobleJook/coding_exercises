testiesspam = ['this','','','is','an','','','array','with','','','blank','spaces']

for item in testiesspam:
	if item != '':
		continue
	else:
		testiesspam.remove(item)

print(testiesspam)

test2 = testiesspam.strip()

print(test2)