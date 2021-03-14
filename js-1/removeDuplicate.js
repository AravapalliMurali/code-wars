/*
Write a JavaScript function to remove duplicate items from an array.

removeDuplicate([10,20,30,40,10,20]);

output - [30,40];
*/

const remove = (a)=>{
    const result = a.filter(ele => {
        //console.log("left",a.indexOf(ele) ,"right", a.lastIndexOf(ele), ele)
        return a.indexOf(ele) == a.lastIndexOf(ele)})
    return result

}
console.log(remove([10,20,30,40,20,10]))
const b = [10,20,30,40,10,20]
//console.log(b.lastIndexOf())