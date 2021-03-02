function repeatFunc() {
    seconds ++;
    console.log(`Hace ${seconds} segundos que se inicio la funcion`);
    setTimeout(repeatFunc, 1000);
}

var seconds=0;
setTimeout(repeatFunc, 1000);