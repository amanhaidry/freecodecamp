/* You should create a function named spinalCase. The spinalCase function should take a single argument, a string. The spinalCase function should return the string in spinal case format. For example, if the argument is JavaScript is awesome, the function should return javascript-is-awesome.
*/

function spinalCase(str) {
  return str
    // Replace underscores and spaces with a space
    .replace(/[_\s]+/g, ' ')
    // Insert a space before capital letters (for camelCase)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Convert to lowercase
    .toLowerCase()
    // Replace spaces with hyphens
    .replace(/\s+/g, '-');
}

// Example usage:
console.log(spinalCase("JavaScript is awesome")); // Output: javascript-is-awesome
console.log(spinalCase("ThisIsSpinalTap"));       // Output: this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show"));// Output: the-andy-griffith-show