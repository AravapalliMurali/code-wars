/*
 Write a JavaScript function to find the unique elements from two arrays. 

Test Data :
1. difference([1, 2, 3], [100, 2, 1, 10]);
return [1, 2, 3, 10, 100]

2. difference([],[]); 
return 'empty array'
 */

const unique = (a, b)=>{
    const result  = a.sort().concat(b.sort())
    const newarr = result.filter((ele,i)=> result.indexOf(ele) == i)
    return newarr//.sort((a,b)=> a-b)
}

console.log(unique([1, 2, 3], [100, 2, 1, 10]))