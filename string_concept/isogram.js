/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
 */

 function isogram(str,flag = false){
     let result = {}
     str = str.toLowerCase()
     if(str.length==0){
         flag = true 
     } else{
        for(const k of  str){
            if(result.hasOwnProperty(k)){
                result[k] += 1
            } else {
                result[k] = 1
            }
        }
        for(const L in result){
            if(result[L]==1){
               //console.log("hi there")
               flag = true
            } else{
                //console.log('hello')
                flag = false
                break
            }
        }
     }
     return flag
 }
 console.log(isogram("abaAAA"))//false
 console.log(isogram(""))//false
 console.log(isogram("moOse"))//false
