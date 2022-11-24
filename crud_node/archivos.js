fs = require('fs');

fs.readdir("./textfiles", (err, data) => {
    if (err) {console.error(err); 
        return; 
    }
      console.log(data);
});
