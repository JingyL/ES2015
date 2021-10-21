def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    to_swap_list = [to_swap.lower(), to_swap.upper()]
    res = []
    for char in phrase:
        if char == to_swap_list[0]:
           res.append(to_swap.upper())
        elif char == to_swap_list[1]:
           res.append(to_swap.lower())
        else:
            res.append(char)
    return ''.join(res)