function bubbleSort(array) {
  // copy of the array to avoid mutating the original input
  let arr = [...array];
  let swapped;

  // Outer loop: number of passes through the array
  for (let i = 0; i < arr.length; i++) {
    swapped = false;

    // Inner loop: compares adjacent elements
    // We subtract i because the largest elements "bubble" to the end,
    // so we don't need to check the last i elements again.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    // Optimization: If no two elements were swapped in the inner loop,
    // then the array is already sorted and we can break early.
    if (!swapped) break;
  }

  return arr;
}
