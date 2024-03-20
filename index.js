function isPalindrome(word) {
   // Write your algorithm here
  //  split the word to letter
  //  then reversed it
  // will join them again
  // then compare the original word with the reversed word
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord ? true : false;
}

/* 
  Add your pseudocode here
  word = "racecar"
  split the word to letter
  ["r", "a", "c", "e", "c", "a", "r"]
   then reversed it
   ["r", "a", "c", "e", "c", "a", "r"]
  will join them again
"racecar"
 then compare the original word with the reversed word
 if they are the same then it is a true otherwise it is false

*/

/*
  Add written explanation of your solution here
  i split the word to letter then reversed it then join them casue it is arrray
   then compare the original word with the reversed word
    after comparing if they are the same then it is a true otherwise it is false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
