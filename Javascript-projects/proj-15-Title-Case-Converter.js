/* Build a Title Case Converter
In this lab you will create a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

"Web Development Is Awesome" is an example of a title cased string.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a titleCase function that takes a string as an argument.
The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
titleCase("I like to code") should return "I Like To Code".
titleCase("javaScript is fun") should return "Javascript Is Fun".*/

function titleCase(str) {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    let titalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    result.push(titalizedWord);
  }
  return result.join(" ");
}