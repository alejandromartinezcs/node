fs = require('fs');

const nombrearchivo = process.argv[2]
const textonuevo = process.argv[3]

console.log(nombrearchivo)
console.log(textonuevo)

fs.appendFile(`./textfiles/${nombrearchivo}`, `\n${textonuevo}`, err => {
    if (err) return console.log(err);
    console.log(`Modificaste el archivo: ${nombrearchivo}`);
})