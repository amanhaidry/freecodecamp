def selection_sort(items):
    n = len(items)
    
    for i in range(n):
        # Assume the current position i is the minimum
        min_index = i
        
        # Search for the actual minimum in the unsorted portion
        for j in range(i + 1, n):
            if items[j] < items[min_index]:
                min_index = j
        
        # Swap the found minimum element with the first unsorted element
        # Only swap if a smaller element was actually found (avoids unnecessary swaps)
        if min_index != i:
            items[i], items[min_index] = items[min_index], items[i]
            
    return items