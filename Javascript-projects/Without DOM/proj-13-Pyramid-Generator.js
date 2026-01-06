/* Build a Pyramid Generator
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named pyramid that takes three arguments.
The first argument should be a string representing the pattern character to repeat in your pyramid.
The second argument should be an integer representing the number of rows in the pyramid.
The third argument should be a Boolean value.
The pyramid function should return a string in which the pattern character is repeated and arranged to form a pyramid having the vertex facing upwards when the third argument is false.
When the third argument is true the pyramid should have the vertex facing downwards.
The vertex row should have a single pattern character, and each other row should have two pattern characters more than the previous one.
Each row should start with a number of spaces sufficient to put the center character of each row in the same column and there should not be any spaces at the end of each row.
The pyramid should start and end with a newline character.*/

function pyramid(char, rows, inverted) {
  let result = "\n";

  if (!inverted) {
    for (let i = 0; i < rows; i++) {
      let countOfChar = 2 * i + 1;
      let countOfSpaces = rows - 1 - i;
      result += " ".repeat(countOfSpaces) + char.repeat(countOfChar) + "\n";
    }
  } else {
    for (let i = rows - 1; i >= 0; i--) {
      let countOfChar = 2 * i + 1;
      let countOfSpaces = rows - 1 - i;
      result += " ".repeat(countOfSpaces) + char.repeat(countOfChar) + "\n";
    }
  }
  return result;
}

// ✅ Example calls
console.log(pyramid("*", 5, false));
/*
    *
   ***
  *****
 *******
*********
*/
console.log(pyramid("#", 4, true));
/*
#######
 #####
  ###
   #
*/
