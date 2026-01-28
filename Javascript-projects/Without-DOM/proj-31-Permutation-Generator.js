/* Build a Permutation Generator
In this lab, you will build a permutation generator that will take a string and return all possible permutations of the characters in the string. For example, the possible permutations of the string cat are cat, cta, act, atc, tac, and tca.

The recursive way of creating permutations of a string works by storing the fixed starting part of the string (prefix), and creating permutations of the rest.

For example, let's consider the word machine. The first round of creating permutations would be made fixing the m as the prefix of the string, and then creating permutations of the rest of the string, achine.

For the rest of the string, permutations continue in the same way. One letter is added to the prefix, maybe the c, so the prefix becomes mc. Then, each of the permutations of ahine is concatenated to the prefix.

This continues until the prefix has all the letters, and the rest of the string is empty, that means one permutation has been created.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named permuteString.
The permuteString function should take three parameters: a string, a prefix value and an empty array for storing and returning the results. The prefix value should be a string used to accumulate characters to form a permutation.
Inside the function, you should check if the length of the passed string is 0. If it is, push the current prefix to the results and return the results.
Iterate over each character in the input string and for each iteration, remove the current character from the string and call the permuteString function recursively with updated arguments to build the remaining permutations.
You should return the final results array.
You should ensure that the permutations are unique by removing duplicates.*/

function permuteString(str, prefix = "", results = []) {
  // Base case: if string is empty, push the prefix
  if (str.length === 0) {
    results.push(prefix);
    return results;
  }

  // Iterate through each character
  for (let i = 0; i < str.length; i++) {
    // Current character
    const char = str[i];

    // Remaining string after removing current character
    const remaining = str.slice(0, i) + str.slice(i + 1);

    // Recursive call with updated prefix and remaining string
    permuteString(remaining, prefix + char, results);
  }

  // Ensure uniqueness by converting to Set and back to array
  return [...new Set(results)];
}

// Example usage:
console.log(permuteString("cat")); 
// Output: [ 'cat', 'cta', 'act', 'atc', 'tac', 'tca' ]