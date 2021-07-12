function highestOccurance(a) {
    let obj = {} , result, maxNo = 1
    for (const ele of a) {
        if (obj.hasOwnProperty(ele)) {
            obj[ele] += 1
        } else {
            obj[ele] = 1
        }
        if (obj[ele] > maxNo) {
            result = ele
            maxNo = obj[ele]
        }
    }
    
    return  result
}

console.log(highestOccurance("krrishhhannnaa"))