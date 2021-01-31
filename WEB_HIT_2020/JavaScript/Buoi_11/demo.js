const readFile = require("./index");

readFile("./text.txt").then((data) => console.log(data))