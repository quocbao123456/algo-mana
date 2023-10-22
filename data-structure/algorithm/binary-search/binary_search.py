import math

def binary_search(arr, x):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = math.floor((high + low)/2)

        # ignore left half
        if arr[mid] < x:
            low = mid + 1
        # ignore right half
        elif arr[mid] > x:
            high = mid - 1
        else:
            return mid
    return -1

def binary_search_rightmost(arr, x):
    low = 0
    high = len(arr) - 1
    
    while (low <= high):
        mid = math.floor((low + high)/2)
        if arr[mid] == x and (mid + 1 > len(arr) - 1 or arr[mid + 1] != x): 
            return mid

        if (arr[mid] > x):
            high = mid - 1
        else: 
            low = mid + 1
    return -1

def binary_search_leftmost(arr, x):
    low = 0
    high = len(arr) - 1
    
    while (low <= high):
        mid = math.floor((low + high)/2)
        if(arr[mid] == x and arr[mid - 1] != x): return mid

        if (arr[mid] >= x):
            high = mid - 1
        else: 
            low = mid + 1
    return -1

# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12]
# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17]

# print(binary_search(arr, 10))
# print(binary_search(arr, 13))
# print(binary_search(arr, 20))
# print(binary_search_rightmost(arr, 0), arr[binary_search_rightmost(arr, 0)])
# print(binary_search_rightmost(arr, 1), arr[binary_search_rightmost(arr, 1)])
# print(binary_search_rightmost(arr, 12), arr[binary_search_rightmost(arr, 12)])
# print(binary_search_rightmost(arr, 10), arr[binary_search_rightmost(arr, 10)])
# print(binary_search_rightmost(arr, 13), arr[binary_search_rightmost(arr, 13)])
# print(binary_search_rightmost(arr, 20), arr[binary_search_rightmost(arr, 20)])

# print(binary_search_leftmost(arr, 0), arr[binary_search_leftmost(arr, 0)])
# print(binary_search_leftmost(arr, 1), arr[binary_search_leftmost(arr, 1)])
# print(binary_search_leftmost(arr, 12), arr[binary_search_leftmost(arr, 12)])
# print(binary_search_leftmost(arr, 10), arr[binary_search_leftmost(arr, 10)])
# print(binary_search_leftmost(arr, 13), arr[binary_search_leftmost(arr, 13)])
# print(binary_search_leftmost(arr, 20), arr[binary_search_leftmost(arr, 20)])



