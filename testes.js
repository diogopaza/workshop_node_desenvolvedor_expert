let args = process.argv.slice(2)
let result = 0;

/*
for(let i of args){

    result += Number(i)
}

console.log(result)
*/

args.forEach((n) => {
    result+=Number(n)
})

console.log(result)