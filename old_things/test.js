/*
const readline = require('readline');
const rl = readline.createInterface({
　　input: process.stdin,
　　output: process.stdout
});
var recursiveAsyncReadLine = function () {
    rl.question('Command: ', function (answer) {
        if (answer == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        console.log('Got it! Your answer was: "', answer, '"');
        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();
*/

var dices_sav = [true, false, true, false, false];
dices_sav = true;
console.log(dices_sav);
