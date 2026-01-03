/* Problem Instructions

In this lab, you will create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").

The function would iterate through the array and test each element using the provided test function. At the end, it would return the first element where the test function returns true.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named findElement that accepts an array and a function as arguments.
The function should return the first item in the array that passes a truth test. This means that, calling the passed in function func, given an element x, the truth test is passed if func(x) is true.
If no element passes the test, the function should return undefined.*/


function findElement(arr, fn) {
  for (let ele of arr) {
    if (fn(ele)) {
      return ele;
    }
  }
  return undefined;
}
