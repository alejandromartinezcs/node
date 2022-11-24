const fs = require('fs');

const nombrearchivo = process.argv[2]

fs.unlink(`./textfiles/${nombrearchivo}`, err => {
    if (err) return console.log(err);
    console.log(`Archivo borrado: ${nombrearchivo}`);
});