fs = require('fs')
var path = require('path')

diretorio = process.argv[2]
extensao = "." + process.argv[3]
//console.log('dir: ' + diretorio) 
//console.log('extensa : '+ extensao)



fs.readdir(diretorio, function(err, list){

    if (err){
        console.log(err)
    }
   list.forEach(function(element) {
        
        result = path.extname(element)
        if (result === extensao)
            console.log(element)

   })
})
