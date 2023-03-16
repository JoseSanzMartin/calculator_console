"use strict";
exports.__esModule = true;
var readline = require("readline");
var calculator_typecsript_josesanz_1 = require("calculator_typecsript_josesanz");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Let's gonna do a mathematical operation");
rl.question('Write the first number ', function (num1) {
    rl.question('Write the second number ', function (num2) {
        rl.question('¿Do you wanna add, substract, multiply or divide this two numbers? (Write +,-,* or /)', function (operator) {
            var operation = new calculator_typecsript_josesanz_1.Calculator(parseInt(num1), parseInt(num2));
            var result;
            switch (operator) {
                case '+':
                    result = operation.add();
                    break;
                case '-':
                    result = operation.substract();
                    break;
                case '*':
                    result = operation.multiply();
                    break;
                case '/':
                    result = operation.divide();
                    break;
                default:
                    console.log('Invalid operation');
                    rl.close();
                    return;
            }
            console.log("Result: ".concat(result));
            console.log("Operation finished, goodbye");
            rl.close();
        });
    });
});
