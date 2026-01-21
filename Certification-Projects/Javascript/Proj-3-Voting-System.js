/* Build a Voting System
In this lab, you will build a voting system that uses Map to create a poll and Set to prevent duplicate voting.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should initialize a poll variable to a new Map object.

You should have a function addOption that accepts a parameter option.

In the addOption function:

If the option does not already exist in the poll, it should be added to the poll with an empty Set as its value to track voters. You should also return the message Option "<option>" added to the poll.

If the option already exists, it should return the message Option "<option>" already exists..

If you try to add an empty option, the function should return the message Option cannot be empty..

You should have a function vote that accepts two parameters, option (the option to vote for) and voterId (a unique ID for the voter).

In the vote function:

If the option does not exist in the poll, the function should return the message Option "<option>" does not exist..

If the option exists, the function should check if the voterId has already voted for this option.

If the voter has already voted, the function should return the message Voter <voterId> has already voted for "<option>".

If the voter has not voted, voterId should be added to the Set of voters for this option. The function should return the message Voter <voterId> voted for "<option>".

You should have at least three options in your poll.

Your poll should have at least three votes.

You should have a function displayResults that returns the poll results in the following format:

Poll Results:
OptionA: N votes
OptionB: N votes
.
.

sample output

Poll Results:
Turkey: 2 votes
Morocco: 1 votes
*/

// poll as a Map
const poll = new Map();

// Function to add an option
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// Function to vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// Function to display results
function displayResults() {
  let results = "Poll Results:\n";
  for (let [option, voters] of poll.entries()) {
    results += `${option}: ${voters.size} votes\n`;
  }
  return results.trim();
}

// -------------------
// Example Usage
// -------------------

//at least three options
console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Spain"));

// at least three votes
console.log(vote("Turkey", "Voter1"));
console.log(vote("Turkey", "Voter2"));
console.log(vote("Morocco", "Voter3"));

// results
console.log(displayResults());