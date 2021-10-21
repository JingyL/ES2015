def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    dic = {}
    dic2 = {}
    new_set1 = set(str(num1))
    new_set2 = set(str(num2))
    for each_num in new_set1:
        dic[each_num] = str(num1).count(each_num)
    for each_num in new_set2:
        dic2[each_num] = str(num2).count(each_num)
    if dic.items() != dic2.items(): 
        return False
    else:
        return True