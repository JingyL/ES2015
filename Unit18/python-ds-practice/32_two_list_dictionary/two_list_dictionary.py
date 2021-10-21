from os import lstat


def two_list_dictionary(keys, values):
    """Given keys and values, make dictionary of those.
    
        >>> two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        {'x': 9, 'y': 8, 'z': 7}
        
    If there are fewer values than keys, remaining keys should have value
    of None:
    
        >>> two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
        {'a': 1, 'b': 2, 'c': 3, 'd': None}
    
    If there are fewer keys, ignore remaining values:

        >>> two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        {'a': 1, 'b': 2, 'c': 3}
   """
    dic = {}
    n = len(keys) - len(values)
    if n <= 0:
        for i in range(len(keys)):
                dic[keys[i]] = values[i]
    if n > 0:
        lst_A = keys[0:len(values):1]
        lst_B = keys[len(values)::1]
        for i in range(len(lst_A)):
                dic[keys[i]] = values[i]
        for key in lst_B: 
            dic[key] = None
    return dic
