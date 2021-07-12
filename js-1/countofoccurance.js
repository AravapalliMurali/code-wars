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
}
//     let count =0
//     for(let i =0;i<string.length;i++){
//         if(string[i] == b){
//             count += 1
//         }
//     }
//     return count
// }


// console.log(occurrences('dct academy' ,  'c'))


var getMax = function (str) {
    var max = 0,
        maxChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           console.log(max)
           maxChar = char;
        }
     });
     return maxChar;
   };
   
  console.log( getMax('355385')) //5;
   
   //console.log(getMax('35538533')) //3;

   const bill =[ {
       customerId : "34784t53894" ,
       lineItems : [
           {
               product : 'whebcwbdw',
               quantity : 2
           }
       ]
   }]

   const newobj = {
        lineItems : [
    {
        product : 'sedn',
        quantity : 4
    } ,
    {
        product : 'pen',
        quantity : 6
    },
    {
        product : 'sacle',
        quantity : 7
    }
   ] }

   delete newobj.product
   //console.log()
   console.log("new object :",{...bill,...newobj})