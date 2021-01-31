const fs = require('fs')

function rwadFile(path) {
    return new Promise( function (resolve, reject) {
        fs.readFile(path, { encoding: "utf-8" }, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

// console.log("start");

// const data = fs.readFile("data2.txt", { encoding: "utf-8"}, function(err, data) {
//     console.log(data);
// });
// console.log(data);
// console.log("end");

readFile("./data.txt").then(function(data){
    console.log(data)
})