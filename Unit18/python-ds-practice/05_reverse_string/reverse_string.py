def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    # return phrase[::-1]
    lst = list(phrase)
    lst.reverse()
    return ''.join(lst)
# What's wrong with join function?