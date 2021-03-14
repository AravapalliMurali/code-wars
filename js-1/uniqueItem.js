/*
Write a JavaScript function to find the first not repeated character. 
Sample arguments : 'abacddbec' 
Expected output : 'e' 
*/

const unique = (string) =>{
    let result = {} , res = ''
      for (const k of string) {
          if(result.hasOwnProperty(k)){
              result[k] += 1
          } else {
              result[k] = 1
          }
    }
    for(const k in result){
        if(result[k] == 1){
            return k
        } 
    }
    return res
}
console.log(unique("abacddbec"))