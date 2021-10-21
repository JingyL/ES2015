def compact(lst):
    """Return a copy of lst with non-true elements removed.

        >>> compact([0, 1, 2, '', [], False, (), None, 'All done'])
        [1, 2, 'All done']
    """  
    # for each in ['', [], False, (), None]:
    #     if each in lst:
    #         lst.remove(each)
    # return lst

    res = []
    for eachElement in lst: 
        if eachElement:
            res.append(eachElement)
    return res