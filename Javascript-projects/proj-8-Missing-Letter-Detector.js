function fearNotLetter(str) {
  let charValue = str.charCodeAt(0);

  for (let i = 1; i < str.length; i++) {
    let expected = charValue + 1;

    if (str.charCodeAt(i) !== expected) {
      return String.fromCharCode(expected);
    }

    charValue++;
  }

  return undefined;
}

// ✅ Example calls
console.log(fearNotLetter("abce")); // "d"
console.log(fearNotLetter("mnopqrsuv")); // "t"
console.log(fearNotLetter("stvwx")); // "u"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
