const {readdir, readFile, writeFile} = require("fs");
const {join} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str => str.split("").reverse().join("");

function leerdirectorio(){
    readdir(inbox, (error, files) => {
        if (error){
            return console.log("Error: Folder inaccessible");
        }
        else{
            console.log("Directorio leido");
            leerfichero(files);
        } 
    });
}

function leerfichero(files){
    files.forEach(file => {
        readFile(join(inbox, file), "utf8", (error, data) => {
            if (error){
                return console.log("Error: File error");
            }
            else{
                console.log("Fichero leido");
                escribirfichero(file, data);
            } 
        });
    });
}

function escribirfichero(file,data){
    writeFile(join(outbox, file), reverseText(data), error => {
        if (error){
            return console.log("Error: File could not be saved!");
        } 
        else{
            console.log(`${file} was successfully saved in the outbox!`);
        }
    });
}    

leerdirectorio();