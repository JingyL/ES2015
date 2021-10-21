def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """

    dic = {}
    num_set = set(nums)
    for num in num_set:
        dic[num] = nums.count(num)

    result = 0
    common_num = None
    for each_num in num_set:
        if dic[each_num]> result:
            result = dic[each_num]
            common_num = each_num
    return common_num