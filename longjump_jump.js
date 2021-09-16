function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var dices = [];
var dices_sav = [0, 0, 0, 0, 0];
var dices_str = 0;

function getDiceRand() {
    dices = new Array(5);
    for(i = 0; i <= dices_str; i++){
        if(dices_str < 5) { // Keep array size in 5
            dices[i] = 7; // After picking the dices, put 7 because sort from big
        }
    }
    for(i = 0 + dices_str; i <= 4; i++){
        dices[i] = getRandomInt(1, 6);
    }
    // console.log(dices);
    return dices;
};

function getDicePoint() {
    var points = 0;
    for(i = 0; i <= 4; i++) {
        if(dices_sav[i] != null) {
            points += dices_sav[i];
        }
    }
    return points;
};

const readline = require('readline');
const rl = readline.createInterface({
　　input: process.stdin,
　　output: process.stdout
});
const reducer = (previousValue, currentValue) => previousValue + currentValue; // Array elements summary
// Cannot use on() recursive but question() is okay
var recursiveAsyncReadLine = function() {
    var result = [];
    console.log(getDiceRand().sort((x,y) => y - x)); // Sort from big to small
    console.log("Garder quels des?");
    rl.question('Garder num : ', function(answer) {
        result = answer.split(' ');
        // console.log(result);
        for(i = 0; i <= 4; i++) {
            if(result[i] != undefined) {
                dices_sav[result[i] - 1] = dices[result[i] - 1];
                dices_str += 1;   
            }
        }
        // console.log("Numb choisi : ", dices_str);
        console.log("J'ai choisi : ", dices_sav);
        console.log("-------------------------");
        if(dices_str == 5) { // We need some base case, for recursion
            console.log("Apres Jump, tu obtiens : ", getDicePoint(), "points");
            return rl.close(); // Closing RL and returning from function
        }
        recursiveAsyncReadLine(); // Calling this function again to ask new question
    });
};
recursiveAsyncReadLine(); // We have to actually start our recursion somehow