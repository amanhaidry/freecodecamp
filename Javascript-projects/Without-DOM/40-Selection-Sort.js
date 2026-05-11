function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Check the rest of the array to find the actual minimum
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // If a new minimum was found, swap it with the current position
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}
