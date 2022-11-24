const fs = require('fs');
const script = process.argv[2]
const projectName = process.argv[3]
const projectFiles = ['index.html', 'styles.css', 'main.js']
const projectDirs = ['css', 'js']

if(script == 'init') {

    projectDirs.forEach(folder => {
    fs.mkdir(`./${folder}`, (err) => {
        if (err) {
        console.log("Error creando la carpeta", err);
            return;}
            
        console.log("Carpeta la creada correctamente");
        })    
    })


    projectFiles.forEach(archivo => {
        fs.writeFile(`${archivo}`, '', err => {
            if (err) return console.log(err);
            console.log(`Archivo creado con el nombre: ${archivo}`);
        });    
    })


} else if (script == 'html'){
    fs.writeFile('index.html', '', err => {
        if (err) return console.log(err);
        console.log(`Archivo creado con el nombre: index.html`);
    });
} else if (script == 'css'){
    fs.writeFile('styles.css', '', err => {
        if (err) return console.log(err);
        console.log(`Archivo creado con el nombre: styles.css`);
    });
} else if (script == 'main'){
    fs.writeFile('main.js', '', err => {
        if (err) return console.log(err);
        console.log(`Archivo creado con el nombre: main.js`);
    });
};

