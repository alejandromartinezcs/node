fs = require('fs');

const nombrearchivo = process.argv.slice(-1)

fs.writeFile(`./textfiles/${nombrearchivo}.txt`, 'Hello Koder!', err => {
    if (err) return console.log(err);
    console.log(`Archivo creado con el nombre: ${nombrearchivo}.txt`);
});