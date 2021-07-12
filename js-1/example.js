const names = [{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: false },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: false },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: true },
{ fname: "vinay",lname: "kumar",status: true },
];

// const result  = names.map(ele=>{
//     if(ele.status == true){
//         return {fname : ele.fname , lname : ele.lname}
//     }
// })
const result = []
for(let i = 0 ; i< names.length ; i++){
    if(names[i].status){
        result.push(names[i].fname  + names[i].lname)
    }
}
console.log(result)