/* Build an Optional Arguments Sum Function
In this lab you will build a function that accepts up to two arguments, and sum them, but if there is only one argument returns a function that waits for the second number to sum.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a function addTogether.

If the function receives two arguments, the function should return the sum of the two arguments.

If only one argument is provided, addTogether should return a function.

When the returned function is called with a single argument, it should return the sum.
const sumTwoAnd = addTogether(2);
sumTwoAnd(3); // 5
If either argument isn't a valid number, return undefined.*/

function addTogether(){
  function isNum(val){
    return typeof val === "number";
  }

  const [first, second] = arguments;

  if(arguments.length == 1){
    if(!isNum(first)){
      return undefined;
    }

    return function(next){
      if(!isNum(next)){
        return undefined;
      }

      return first + next;
    }
  }

  if(arguments.length == 2){
    if(!isNum(first) || !isNum(second)){
      return undefined;
    }

    return first + second;
  }

  return undefined;
}