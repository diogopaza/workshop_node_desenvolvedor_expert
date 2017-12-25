//console.log(process.argv)
let tot =0;
const args = process.argv.slice(2)
//let pos1 = process.argv[2];
//console.log(pos1)


for(i=0;i<args.length;i++){
    valor = Number( args[i] )
    tot += valor; 
    

}

console.log(tot)

//let result = process.argv;
//console.log(result);
