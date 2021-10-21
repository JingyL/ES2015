def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
    for each_list in lst:
        if type(each_list) is not list:
            return False
    
    return True