from textgenrnn import textgenrnn
import time

textgen = textgenrnn()
textgen.train_from_file('all_text.txt', num_epochs=1)

while True:
	textgen.generate()
	time.sleep(1)