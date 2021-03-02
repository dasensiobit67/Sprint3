
var fs = require('fs');

function write(){
    fs.writeFile("file.txt", write.name, function(err) {
        if (err) {
            return console.log(err);
        }
    console.log("El archivo fue creado correctamente");
    });
}

write();