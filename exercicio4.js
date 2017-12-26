fs = require('fs');
file = process.argv[2];


const files = fs.readFile(file,'utf8', function(err,data){
    if(err) throw err       
    
    console.log( data.toString().split('\n').length - 1)

})

