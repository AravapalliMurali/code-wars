// function isAlphabet(x)
// {
//     return ((( (x >= 'A' && x <= 'Z') ||
//             (x >= 'a' && x <= 'z') )) || (x >= 0 && x<= 9));
// }

// function reverse(str){
//     let temp  , reverseString = [...str]
//     let  i =0 , j = str.length - 1
//     while( i < j){
//         while(!(isAlphabet(reverseString[i]))) i++
//         while(!(isAlphabet(reverseString[j]))) j--  
//         if(i <= j){
//             let temp = str[i]
//             str[i] = str[j]
//             str[j] = temp
//             i++
//             j--
//         }
//     }
//     return reverseString.join('')
// }

// console.log(reverse("ABD$EE&3"))



function isAlphabet(char) { 
    return ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= 0 && char <= 9)); 
} 

function reverse(str) {  
    const charArray = str.split('');
    let i = 0, j = charArray.length - 1; 
    
    while (i < j) 
    { 
        if (!isAlphabet(charArray[i])) { 
            i++;
        } 
        else if(!isAlphabet(charArray[j])) { 
            j--; 
        } 
        else { 
            [charArray[i], charArray[j]] = [charArray[j], charArray[i]]; //swap
            i++; 
            j--; 
        } 
    } 
	return charArray.join('');
}

console.log(reverse('ABD$EE&3'))