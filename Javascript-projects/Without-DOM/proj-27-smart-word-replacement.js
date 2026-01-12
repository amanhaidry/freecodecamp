/* Build a Smart Word Replacement Function In this lab, you will create a function that performs a search and replace on the sentence using the arguments provided and then returns the new sentence.
Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
User Stories:
You should create a function named myReplace. The myReplace function should take three arguments: a string, a word to be replaced, and the word to replace it with. The myReplace function should return the new string with the replacement. You should preserve the case of the first character in the original word when you are replacing it.
*/

function myReplace(str, before, after) {
    // Check if the first character of 'before' is uppercase
    if (before[0] === before[0].toUpperCase()) {
      // Capitalize the first character of 'after'
      after = after[0].toUpperCase() + after.slice(1);
    } else {
      // Ensure 'after' starts lowercase if 'before' was lowercase
      after = after[0].toLowerCase() + after.slice(1);
    }
  
    // Replace the word in the string
    return str.replace(before, after);
  }
  
  // 🔹 Example Tests
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  // Output: "He is Sitting on the couch"
  
  console.log(myReplace("I love Book reading", "Book", "dog"));
  // Output: "I love Dog reading"
  
  console.log(myReplace("She found a pen", "pen", "Marker"));
  // Output: "She found a marker"