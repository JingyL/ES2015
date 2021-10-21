def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    new_list = phrase.split()
    each_word_lst = []
    for each_word in new_list:
         each_word_lst.append(each_word.capitalize())
    return ' '.join( each_word_lst)