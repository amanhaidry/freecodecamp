function findLongestWordLength(str) {
  // Split the sentence into words
  let words = str.split(" ");

  // Track the longest word length
  let longest = 0;

  // Loop through each word
  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  // Return the longest word length
  return longest;
}
