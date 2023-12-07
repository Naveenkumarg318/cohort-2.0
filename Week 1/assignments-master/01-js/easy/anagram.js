/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  //remove all whitespaces using " /\s/g " regular expression where '/' is start of regular exp and '\' is end of reg exp,
  //and '\s' is used to replace all white spaces or tabs with emtpy string i.e '', and 'g' stands for global, i.e 
  //to replace all occurences in the string and not just the first one.
  //and tolowercase is used to make the string case sensitive.

  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // check the length of the strings and if the lengths are not equal then return false.
  
  if(str1.length !== str2.length)
  {
    return false;
  }

  //now sort the two strings and compare them
  //here split is used to break the string into single charecters and '' as a parameter indicates empty string, and
  //sort is used to sort the charecters in lexicographical order i.e alphabetical order.
  //and join is used to combine to string.

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  //check returns true or false
  return str1==str2;
}

module.exports = isAnagram;

