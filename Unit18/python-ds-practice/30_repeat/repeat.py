def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    newphrase = ''
    if type(num) is int:
        if num > 0:
            newphrase = phrase * num
            return  newphrase
        elif num == 0:
             return newphrase 
    else:
        return None