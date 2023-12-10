def merge_lists(lst1, lst2):
    merged = []
    left_index = 0
    right_index = 0
    
    while left_index < len(lst1) and right_index < len(lst2):
        if lst1[left_index] < lst2[right_index]:
            merged.append(lst1[left_index])
            left_index += 1
        else:
            merged.append(lst2[right_index])
            right_index += 1
    
    while left_index < len(lst1):
        merged.append(lst1[left_index])
        left_index += 1

    while right_index < len(lst2):
        merged.append(lst2[right_index])
        right_index += 1
        
    return merged

print(merge_lists([1,3,4,5], [2,6,7,8]))
print(merge_lists([1,3,4,5], []))
print(merge_lists([], [2,6,7,8]))
print(merge_lists([], []))


