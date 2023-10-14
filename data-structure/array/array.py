import array as arr

# Initialize 
# List
nums = [1, 2, 3, 4]
# Array
nums1 = arr.array('i', [1, 2, 3, 4])

# Traverse  O(N)
for index in range(0, len(nums)):
    print(index)
    
# Append (insert item at end of array)  O(1)
nums.append(2)

# Insert (at a specified position in array) insert(index, target) O(N), as append when out range index
nums.insert(1, 2)

# Access element  O(1)
nums[3]

# Remove element specified index: O(1) for last index || O(N) for other case, IndexError for out range index
nums.pop(2)

# Remove a element by value: remove(target)
nums.remove(1)

# Slice array nums[startIndex:endIndex] ==> [start, end)    O(N), ValueError if not existed
nums[2:3]

# Search element: index(target) ==> first index of target in arr   O(N), ValueError if not existed
nums.index(2)

# Get length of arr O(1)
len(nums)

# Update element    O(1)
nums[0] = 3

# Extend arr    O(N)
nums.extend([8, 10])

# Sort arr    O(N)
nums.sort(nums)     # ASC
nums.sort(reverse=True) # DESC
sorted(nums)

def sortFunc(item):
    return len(item)

nums.sort(key=sortFunc)
sorted(nums, key=sortFunc)