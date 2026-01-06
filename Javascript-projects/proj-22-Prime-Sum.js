/* Build a Prime Number Sum Calculator
In this lab, you will build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a sumPrimes function that accepts a number as an argument.
The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
If the input number is less than 2, the function should return 0.*/

function sumPrimes(num) {
  // edge case
  if (num < 2) return 0;

  // function to check any num is prime or not
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}
