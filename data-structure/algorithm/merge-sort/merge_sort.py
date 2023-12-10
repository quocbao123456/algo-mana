def merge(left, right):
    merged = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1

    # Add rest element
    while left_index < len(left):
        merged.append(left[left_index])
        left_index += 1

    while right_index < len(right):
        merged.append(right[right_index])
        right_index += 1

    return merged

def merge_sort(lst):
    if len(lst) <= 1:
        return lst

    mid = len(lst)
    left = merge_sort(lst[:mid])
    right = merge_sort(lst[mid:])

    return merge(left, right)

def merge_1(arr, beg, mid, end, maxele):
    i = beg
    j = mid + 1
    k = beg
     
    while (i <= mid and j <= end):
        if (arr[i] % maxele <= arr[j] % maxele):
            arr[k] = arr[k] + (arr[i] %
                    maxele) * maxele
            k += 1
            i += 1
        else:
            arr[k] = arr[k] + (arr[j] %
                    maxele) * maxele
            k += 1
            j += 1
             
    while (i <= mid):
        arr[k] = arr[k] + (arr[i] %
                maxele) * maxele
        k += 1
        i += 1
    while (j <= end):
        arr[k] = arr[k] + (arr[j] %
                maxele) * maxele
        k += 1
        j += 1
 
    # Obtaining actual values
    for i in range(beg, end + 1):
        arr[i] = arr[i] // maxele
        
def mergeSortRec(arr, beg, end, maxele):
     
    if (beg < end):
        mid = (beg + end) // 2
        mergeSortRec(arr, beg, mid, maxele)
        mergeSortRec(arr, mid + 1, end, maxele)
        merge_1(arr, beg, mid, end, maxele)
        
def merge_sort_1(arr):
    if len(arr) == 0: return arr
    
    maxele = max(arr) + 1
    mergeSortRec(arr, 0, len(arr) - 1, maxele)
