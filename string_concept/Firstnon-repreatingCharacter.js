/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

const firstNonRepeatingLetter = s => {
    const index = s
      .toLowerCase()
      .split('')
      .findIndex((char,i, s) => s.indexOf(char) === s.lastIndexOf(char))
      console.log(s)
  
    return index === -1 ? '' : s[index]
  }
console.log(firstNonRepeatingLetter('sTress'))
console.log(firstNonRepeatingLetter('mmuurTtraallii'))

// const s = 'sTress'
// const input = s
//     .toLowerCase()
//     .split('')
// //const even = ele => ele%2 === 0
// //console.log(input)

// const result =input.findIndex((ele, _ ,input) =>{
//     //console.log(ele)
//     console.log(input.indexOf(ele) === input.lastIndexOf(ele))// when it return true then it checks in input array for the postion of the character and check with string which is provided as input 
//     //console.log(ele)
// }) 
// console.log(s[result])