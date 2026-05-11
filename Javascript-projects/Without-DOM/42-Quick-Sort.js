function quicksort(array) {
  // Base case: arrays with 0 or 1 elements are already sorted
  if (array.length <= 1) {
    return array;
  }

  // Choosing the first element as the pivot
  const pivot = array[0];
  const left = [];
  const right = [];

  // Partitioning: Start from index 1 since index 0 is the pivot
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursive call: Sort the left and right, then combine with pivot
  // Use the spread operator to flatten the arrays into one
  return [...quicksort(left), pivot, ...quicksort(right)];
}
