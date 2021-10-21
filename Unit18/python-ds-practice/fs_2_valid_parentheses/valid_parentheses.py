def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    left_side = "("
    right_side = ")"
    seen = []
    for each_p in parens:
        if each_p == left_side:
            seen.append(each_p)
        if each_p == right_side:
            if len(seen) == 0:
                return False
            else:
                seen.pop(-1)
    if seen == []:
        return True
    else:
        return False
