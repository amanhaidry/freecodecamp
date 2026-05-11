function insertionSort(array) {
  // Start from the second element (index 1)
  // because a single element (index 0) is technically already sorted.
  for (let i = 1; i < array.length; i++) {
    // current element to be inserted
    let current = array[i];
    // comparing with the element to the left
    let j = i - 1;

    // Move elements of array[0..i-1] that are greater than current
    // to one position ahead of their current position
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    // Place the current element in its correct sorted position
    array[j + 1] = current;
  }

  return array;
}
