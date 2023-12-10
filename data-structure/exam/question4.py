
def findDuplicate(lst):
    visiteds = set()
    result = set()
    
    for num in lst:
        if num in visiteds:
            result.add(num)
        
        visiteds.add(num)
    
    return [elem for elem in result]
        
print(findDuplicate([1,3,1,3,5,1,4,7,7]))
print(findDuplicate([]))
        