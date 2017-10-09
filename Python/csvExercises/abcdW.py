import csv

ifile = open('abcd.csv', "rb")
reader = csv.reader(ifile)
ofile = open('tabcd.csv', "wb")
writer = csv.writer(ofile, delimiter='\t', quotechar='"', quoting=csv.QUOTE_ALL)

for row in reader:
  writer.writerow(row)

ifile.close()
ofile.close()