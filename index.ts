import * as readline from 'readline';
import { Calculator } from 'calculator_ts_josesanz';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Let's gonna do a mathematical operation`)
rl.question('Write the first number ', (num1) => {
    rl.question('Write the second number ', (num2) => {
        rl.question('¿Do you wanna add, substract, multiply or divide this two numbers? (Write +,-,* or /)', (operator) => {
            const operation = new Calculator(parseInt(num1), parseInt(num2));
            let result: number;
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
            console.log(`Result: ${result}`);
            console.log(`Operation finished, goodbye`)
            rl.close();
        });
    });
});