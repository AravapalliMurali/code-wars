/*
You have given an array that contains numbers but one number is missing, you need to write a  program to find that missing number in an array. One trick to solve this problem is to calculate the sum of all numbers in the array and compare them with the expected sum, the difference would be the missing number.

Input: [1,2,3,5]

Output: 4

Input: [19,18,17,15]

Output: 16
*/

const missing=(a)=>{
    let b = a.sort()
    console.log('sorted :', b)
    let missing
    for(let i =Math.min(...b);i<Math.max(...b);i++){
        //console.log(b[i])
        if(!(b.includes(i))){
            missing =i
        }
    }
    return missing
}

console.log(missing([19,18,17,15]))
