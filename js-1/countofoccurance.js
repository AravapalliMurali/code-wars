/*
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments : 'dct academy' ,  'c' 
Expected output : 2 
*/

const occurrences =(string , b)=>{
    //let result = {}
    // for(const k of string){
    //     if(result.hasOwnProperty(k)){
    //         result[k] += 1
    //     } else {
    //         result[k] = 1
    //     }
    // }
    
    // for(const k in result){
    //     if(k == b){
    //         return result[k]
    //     }
    // }
    // return 0
    let count =0
    for(let i =0;i<string.length;i++){
        if(string[i] == b){
            count += 1
        }
    }
    return count
}


console.log(occurrences('dct academy' ,  'c'))