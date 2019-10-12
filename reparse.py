import csv


with open('posts.csv', 'r') as readFile:
	reader = csv.reader(readFile)
	lines = list(reader)

text = ""

for l in lines:
	text += l[1]
	text += ". "

f = open("all_text.txt", "a")
f.write(text)
f.close()

