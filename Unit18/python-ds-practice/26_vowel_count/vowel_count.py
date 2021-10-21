def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    vowel = "aeiou"
    vowel_dic = {}
    upper_case = phrase.lower()
    for char in upper_case:
        if char not in vowel_dic.keys():
            if char in vowel:
                vowel_dic[char] = upper_case.count(char)
    return vowel_dic