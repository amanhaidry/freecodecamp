def quick_sort(items):
    # Base case: A list with 0 or 1 elements is already sorted
    if len(items) <= 1:
        return items
    
    # Selecting the first element as the pivot
    pivot = items[0]
    
    # Partitioning the list into three sublists
    # This approach ensures the original list is not modified
    less_than_pivot = [x for x in items if x < pivot]
    equal_to_pivot = [x for x in items if x == pivot]
    greater_than_pivot = [x for x in items if x > pivot]
    
    # Recursive calls to sort the sublists and concatenate them
    return quick_sort(less_than_pivot) + equal_to_pivot + quick_sort(greater_than_pivot)