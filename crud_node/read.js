const fs = require('fs');

const nombrearchivo = process.argv[2]

fs.readFile(`./textfiles/${nombrearchivo}`, 'utf8', (err, data) => {
  if (err) {console.error(err); 
    return; 
}
  console.log(data);
});
