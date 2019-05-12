# This function finds the first duplicate in an array/dictionary and returns it's value. 
# (Actually uses a list but is essentially the same as an array in python)
def findDuplicate(container):
    uniqueElements = set()

    # If passed a dictionary, convert it's values to a list
    if type(container) == dict:
        container = list(container.values())

    for item in container:
        if item in uniqueElements:
            return item    
        else:
            uniqueElements.add(item)
    return []

# Test cases
duplicateArrayNumeric       = [0,1,2,3,2,4]
noDuplicateArrayNumeric     = [0,1,2,3,4]
duplicateArrayString        = ["cat", "dog", "jeff", "cat", "dog"]
noDuplicateArrayString      = ["cat", "dog", "jeff"]
duplicateValDictNUmeeric    = {"Patches": "cat", "Blacky": "dog", "Orngy": "cat"}
noDuplicateValDictNUmeeric  = {"Patches": "cat", "Blacky": "dog"}

# Run Tests
assert findDuplicate([]) == []
assert findDuplicate(duplicateArrayNumeric) == 2
assert findDuplicate(noDuplicateArrayNumeric) == []
assert findDuplicate(duplicateArrayString) == "cat"
assert findDuplicate(noDuplicateArrayString) == []
assert findDuplicate(duplicateValDictNUmeeric) == "cat"
assert findDuplicate(noDuplicateValDictNUmeeric) == []

print("Yahoo! Tests all passed!")

