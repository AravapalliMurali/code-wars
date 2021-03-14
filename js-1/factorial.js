/*
Write a JavaScript function to calculate the falling factorial of a number.
Let x be a real number (but usually an integer).
Let k be a positive integer.
Then x to the (power of) k falling is :
kth falling factorial power of x
This is called the kth falling factorial power of x.

*/

function recursiveFactorial(a) {
    let fact = 1
    for (let i = 1; i <= a; i++){
        fact *= i
    }
    return fact
}

console.log(recursiveFactorial(4))