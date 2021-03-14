/*
Create the function reverseString that reverses a string, and returns the value of the reversed string.

NOTE: Do not use the built-in Array .reverse() method!

Examples:

INPUT: reverseString("hello");
OUTPUT: 'olleh'
INPUT: reverseString('Greetings from the moon!');
OUTPUT: '!noom eht morf sgniteerG'
*/

const reverse = (input)=>{
    let result = ''
    if(input.length > 0){
        for(let i = input.length-1 ; i>=0 ;i--){
            result += input[i]
        }
        return result
    } else {
        return "string is empty"
    }
}
console.log(reverse('Greetings from the moon!'))