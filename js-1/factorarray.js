const arr = [1,2,4,8,16]
const arr1 = [2,4,6,7,12]
function factorial( arr){
    let result = ''
    let i = 0 , j = i+1
    while(i<j){
        if(arr[j] % arr[i] == 0){
            result = true
        } else{
            result = false
            i++
            j++
        }
    }
    return result
}

console.log(factorial(arr1))