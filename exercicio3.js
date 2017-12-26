var fs = require('fs')
var file = process.argv[2]
linhasArquivo = fs.readFileSync(file).toString().split('\n').length -1

//linhas1 = Number(arquivo.split('\n').length)

//console.log(linhas)
console.log(linhasArquivo)

