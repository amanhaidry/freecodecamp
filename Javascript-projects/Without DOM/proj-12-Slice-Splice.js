/*Implement the Slice and Splice Algorithm
In this lab, you will need to create an algorithm to merge two arrays.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a frankenSplice function that accepts two arrays and an index.
Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, idx) {
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(idx + i, 0, arr1[i]);
  }
  return result;
}

// ✅ Example calls
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// Output: [4, 1, 2, 3, 5, 6]

console.log(frankenSplice(["a", "b"], ["x", "y", "z"], 2));
// Output: ["x", "y", "a", "b", "z"]

console.log(frankenSplice([10, 20], [30, 40, 50], 0));
// Output: [10, 20, 30, 40, 50]