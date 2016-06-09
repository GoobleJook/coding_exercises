# The first half of the string, rounded with round(), should be lowercased.
# The second half should be uppercased.
# E.g. "Treehouse" should come back as "treeHOUSE"
def sillycase(string):
    """
    Takes a string and returns the first half in lowercase and the 2nd 
    in uppercase
    """
    try:
        slen = float(len(string))
        half = int(round(slen/2))
        first = "" + string[:half].lower()
        second = "" + string[half:].upper()
        word =  first + second
        return word
    except:
        print("Not a string")