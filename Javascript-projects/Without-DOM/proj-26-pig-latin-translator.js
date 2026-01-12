/* Implement a Pig Latin Translator Pig Latin is a way of altering English words by following specific transformation rules.
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.
User Stories:
You should create a translatePigLatin function that accepts one string as argument. If the string argument begins with a consonant, your function should take the first consonant or consonant cluster, move it to the end of the word, add ay to it, and return the result. If the string argument begins with a vowel, your function should add way at the end and return the result. Your function should handle string arguments where the first vowel comes in the middle of the word and return the appropriately transformed string. If the string argument has no vowels, your function should add ay at the end and return the result.
*/ 

function translatePigLatin(str) {
  // Define vowels
  const vowels = /[aeiou]/i;

  // Case 1: Starts with a vowel
  if (vowels.test(str[0])) {
    return str + "way";
  }

  // Case 2: Contains vowels but starts with consonant(s)
  const vowelIndex = str.search(vowels);
  if (vowelIndex !== -1) {
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }

  // Case 3: No vowels at all
  return str + "ay";
}