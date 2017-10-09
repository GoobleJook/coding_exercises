testiesspam = ['this','','','is','an','','','array','with','','','blank','spaces']
cleaned_list = []

for item in testiesspam:
  if item != '':
    cleaned_list.append(item)
cleaned_list.append('removed')
  
print(testiesspam)
print(cleaned_list)