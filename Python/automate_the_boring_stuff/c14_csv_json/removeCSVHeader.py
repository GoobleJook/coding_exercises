#! python3
#removeCSVHeader.py -- removes the header from all CSV files in working directory

import csv, os

os.makedirs('headerRemoved', exist_ok=True)

# Loop through every file in the WD
for csvFilename in os.listdir('./removeCsvHeader'):
	if not csvFilename.endswith('.csv'):
		continue # skip non-csv files

	print('Removing header from ' + csvFilename + '...')

	# Read the CSV file in (skipping the first row) 
	csvRows = []
	csvFileObj = open('./removeCsvHeader/'+csvFilename)
	readerObj = csv.reader(csvFileObj)
	for row in readerObj:
		if readerObj.line_num == 1:
			continue  # skip the first row
		csvRows.append(row)
	csvFileObj.close()

	# Write out the CSV file
	csvFileObj = open(os.path.join('headerRemoved', csvFilename), 'w', newline='')
	csvWriter = csv.writer(csvFileObj)
	for row in csvRows:
		csvWriter.writerow(row)
	csvFileObj.close()


