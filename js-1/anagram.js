function anagramCheck(a,b){
    return a.toLowerCase().split("").sort().join("") === b.toLowerCase().split("").sort().join("")
}

console.log(anagramCheck("mary" , "amry"))