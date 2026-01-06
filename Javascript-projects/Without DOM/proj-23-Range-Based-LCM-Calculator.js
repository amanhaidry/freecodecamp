/* Implement a Range-Based LCM Calculator
In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories

You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.*/

function smallestCommons(arr) {
  //get min & max
  let [min, max] = arr.sort((a, b) => a - b);

  //helper function for gcd
  function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
  }

  //helper function for lcm
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  //apply lcm across the range
  let multiple = min;
  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}