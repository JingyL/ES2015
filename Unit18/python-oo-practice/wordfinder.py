"""Word Finder: finds random words from a dictionary."""
from random import randint

class WordFinder:

    """Machine for finding random words from dictionary.
    
    >>> wf = WordFinder("simple.txt")
    >>> wf
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    """
    
    def __init__(self, file):
        self.file = open(file)
        self.word_list = []

    def __repr__(self): 
        return f"{len(self.wlst())} words read"
        

    def wlst(self):
        for line in self.file:
           self.word_list.append(line.strip())
        return self.word_list

    def random(self):
        words = self.wlst()
        return words[randint(0, (len(words) - 1))]

class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines/comments.
    
    >>> swf = SpecialWordFinder("complex.txt")
    >>> swf
    4 words read

    >>> swf.random() in ["parsnips", "apple", "kale", "mango"]
    True

    >>> swf.random() in ["parsnips", "apple", "kale", "mango"]
    True

    >>> swf.random() in ["parsnips", "apple", "kale", "mango"]
    True
    """
    def wlst(self):
        """list of words, skipping blanks/comments."""
        for line in self.file:
            if line.strip() and not line.startswith("#"):
                self.word_list.append(line.strip())
        return self.word_list
