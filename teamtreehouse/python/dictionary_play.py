def members(a_dict, key_list):
    """
    Input: a dictiony and a list of keys
    
    returns a count of how many items in the list are also keys in the 
    dictionary
    """
    

def word_count(a_string):
    """
    Input: a string
    
    Returns a dictionary with each word in the string as the key and the 
    number of times the words appears as its value
    """
    a_string = a_string.lower()
    l_string = a_string.split()
    print l_string
    wc_dict = {}
    for word in l_string:
        if word in 