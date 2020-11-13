/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}
*/
function count (string) {  
    let result = {}
      for (const k of string) {
          if(result.hasOwnProperty(k)){
              result[k] += 1
          } else {
              result[k] = 1
          }
    }
    return result 
}
console.log(count('it working'))

