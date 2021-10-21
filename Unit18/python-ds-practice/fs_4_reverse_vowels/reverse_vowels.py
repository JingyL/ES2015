def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """

    vowels = "aeiou"
    chars = []
    idx = []
    for i in range(len(s)):
        if s[i].lower() in vowels:
            chars.append(s[i])
            idx.append(i)
    chars = chars[::-1]
    dic = {}
    for i in range(len(chars)):
        dic[idx[i]] = chars[i]
    res = ""
    for i in range(len(s)):
        if i in idx:
            res += dic[i]
        else:
            res += s[i]
    return res


