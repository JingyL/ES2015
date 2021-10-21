def find_factors(num):
    """Find factors of num, in increasing order.

    >>> find_factors(10)
    [1, 2, 5, 10]

    >>> find_factors(11)
    [1, 11]

    >>> find_factors(111)
    [1, 3, 37, 111]

    >>> find_factors(321421)
    [1, 293, 1097, 321421]
    """
    
    if num == 1:
        return [1]
    elif num > 1:
        res = [1]
        for i in range(2,num):
            if num % i == 0:
                res.append(i)
        res.append(num)
    return res