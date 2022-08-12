const fs = require('fs');

let readFile = (fileName, encoding) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
    })
};

readFile('te.txt', 'utf-8').then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err)
});