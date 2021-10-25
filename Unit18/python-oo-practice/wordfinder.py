"""Word Finder: finds random words from a dictionary."""
from random import randint

class WordFinder:
    ...
    def __init__(self, file):
        self.file = open(file)
        self.word_list = []


    def wlst(self):
        for line in self.file:
           self.word_list.append(line.strip())
        return self.word_list

    def random(self):
        words = self.wlst()
        return words[randint(0, 235885)]