const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

function readFile(path) {
    return new Promise((resolve, rejects) => {
        fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
            if (err) {
                rejects(err);
            } else {
                resolve(data);
            }

        })
    })
}

// Promise.all([readFile("text.txt"), readFile("text2.txt")])
//     .then((data) => console.log(data))
//     .catch((err) => console.log("err: ", err));

module.exports = readFile;