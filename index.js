function isPalindrome(word) {
  // Write your algorithm here
  //iterate from beginning to middle
  //racecar 7/2 === 3.5
  //aaaaaa 6/3 === 3
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here

  iterate from beginning to middle of word and check that
  letter to corresponding letter from the end
  if any letters don't match, return false.
*/

/*
  Add written explanation of your solution here
  write function that returns true if the given word is the same
  forward and backward.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("abba", isPalindrome("abba"))
  console.log("a", isPalindrome("a"))
  console.log("empty", isPalindrome(""))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
