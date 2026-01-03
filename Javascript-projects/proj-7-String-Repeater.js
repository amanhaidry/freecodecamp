function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let result = "";

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// ✅ Example calls
console.log(repeatStringNumTimes("abc", 3)); // Output: "abcabcabc"
console.log(repeatStringNumTimes("xyz", 0)); // Output: ""
console.log(repeatStringNumTimes("Aman", 2)); // Output: "AmanAman"
