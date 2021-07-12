const array = [16,17,4,3,5,2]
const leadElement = (arr)=>{
    let result = []
    for(let i =0 ; i<arr.length;i++){
        for(let j = i+1; j <arr.length ; j++){
            if(arr[i] < arr[j]){
                result.push(arr[j])
                break
            }
        }
        if( i === arr.length - 1){
            result.push(arr[i])
        }
    }
    return result.filter((ele,i)=>result.indexOf(ele) == i)
}
console.log(leadElement(array))
