/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let j = str.length-1;
  for(let i=0;i<(j/2);i++)
  {
   let x = str[i];
   let y = str[j-i];
   if(x.toLowerCase()!==y.toLowerCase())
   {
    return false;
   }
  }
  return true;
}

const val = isPalindrome("Nan");
console.log(val);

module.exports = isPalindrome;
