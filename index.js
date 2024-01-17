function isPalindrome(string1) {
  // Write your algorithm here
  // Change string items to lowercase and remove items that are not alphabets
  string1 = string1.replace(/[^a-z]/g, '').toLowerCase();

   /* 
  Add your pseudocode here
  */
  // Pointers at the beginning and at the end of the string
  let left = 0;
  let right = string1.length - 1;

  // Determining if palindrome 
  while (left < right) {
    if (string1[left] !== string1[right]) {
      return false; // Return false if characters are not equal
    }
    left++;
    right--;
  }

  return true; 
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;