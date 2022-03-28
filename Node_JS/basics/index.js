const counterObject = require("./my_script.js");

console.log(counterObject.getCounter());
counterObject.incrementCounter();
console.log(counterObject.getCounter());

const newCounterObject = require("./my_script.js");

console.log(newCounterObject.getCounter());
