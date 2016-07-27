let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);
let answerGenerator = require('./answerGenrator');
let judgment = require('./compareNumber');


class Game {
    constructor() {

        console.log(`Welcome!
Please input your number(6):`);
        let answer = answerGenerator.answer() + '';
        let count = 5;
        rl.on('line', (input)=> {

            const inputs = input.split('');
            let tag = 0;
            for (const input of inputs) {
                if (inputs.indexOf(input) != inputs.lastIndexOf(input)) {
                    tag = 1;
                }
            }
            if (tag === 0 && inputs.length === 4) {
                receipt(answer, input, count);
                count--;
            }
            else {
                console.log('Cannot input duplicate numbers!');
            }
        })

        function receipt(answer, input, count) {

            let put = judgment.judNumber(answer, input);

            if (count === 0) {
                console.log("Game Over");
                rl.close();
            }
            else if (put === '4A0B') {
                console.log("Congratulations!");
                rl.close();
            } else {
                console.log(`${put}
Please input your number(${count}): `);
            }
        }
    }
}

new Game();
module.exports = Game;