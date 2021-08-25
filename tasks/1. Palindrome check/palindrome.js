export function isPalindrome(inputString) {
  // const inputArray = inputString.split("");
  for (let i=0; i<inputString.length; i++){
    if (!(inputString[i]==inputString[inputString.length-1-i])){
      console.log(inputString[i], inputString[inputString.length-1-i]);
      return false;
    }
    
    

  }
  return true;
}

console.log(isPalindrome("aabaa"));