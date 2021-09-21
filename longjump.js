function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const reducer = (previousValue, currentValue) => previousValue + currentValue; // Array elements summary
var result = [];
var dices = [0, 0, 0, 0, 0];
var dices_cnt = 0;
var dices_nct = 0;
var dices_sav = [0, 0, 0, 0, 0];
var dices_fin = [0, 0, 0, 0, 0];
var dices_enb = [false, false, false, false, false];
var infoStr = "Run-up time now, please throw the dices!!";
var warnStr = "";
var nextStep = 0;
var score = 0;
var throwEnb = false;
var stepEnb = true;

function throwDiceRand() {
    if(nextStep == 0) {
        for(i = 0; i <= 4; i++){
            if(dices_enb[i] == true) {
                dices[i] = 0;
            } else {
                dices[i] = getRandomInt(1, 6);
            }
        }
        return dices.sort((x, y) => x - y); 
    } else if(nextStep == 1) {
        for(i = 0; i <= dices_cnt - 1; i++){
            if(dices_enb[i] == true) {
                dices[i] = 7;
            } else {
                dices[i] = getRandomInt(1, 6);
            }
        }
        return dices.sort((x, y) => y - x);
    }
    // console.log("dices : ", dices);
};

function getDicesVal() {
    for(i = 0; i <= 4; i++) {
        if(dices_enb[i] == true) {
            dices_fin[i] = dices_sav[i];
        } else {
            dices_fin[i] = dices[i];
        }
    }
    // console.log("dices_fin : ", dices_fin);
    return dices_fin;;
};

function detectFreeze(position) {
    if(nextStep == 0) {
        if(position == '6') {
            result = [];
        } else {
            result.push(position);
            dices_cnt += 1;
        }
        for(i = 0; i <= 4; i++) {
            if(result[i] != undefined) {
                if(dices_sav.reduce(reducer) + dices[result[i] - 1] <= 8 && dices_cnt < 5) {
                    dices_enb[parseInt(result[i], 10) - 1] = true;
                    dices_sav[parseInt(result[i], 10) - 1] = dices[parseInt(result[i], 10) - 1];
                    infoStr = "You have already freezed " + dices_cnt + " dice(s)!!";
                    warnStr = "";
                    nextStep = 0;
                    stepEnb = true;
                    stepEnb = true;
                } else if(dices_sav.reduce(reducer) + dices[result[i] - 1] <= 8 && dices_cnt == 5) {
                    dices_enb[parseInt(result[i], 10) - 1] = true;
                    dices_sav[parseInt(result[i], 10) - 1] = dices[parseInt(result[i], 10) - 1];
                    infoStr = "You have already freezed " + dices_cnt + " dice(s)!!";
                    warnStr = "You've freezed all five dices, run-up time finished, please go to next step!!"
                    nextStep = 1;
                    stepEnb = false;
                } else {
                    for(i = parseInt(result[i], 10) - 1; i <= 4; i++) {
                        dices_enb[i] = true;
                    }
                    dices_cnt -= 1;
                    infoStr = "";
                    warnStr = "You've freezed total over eight, run-up time finished, please go to next step!!"
                    nextStep = 1;
                    stepEnb = false;
                }
            }
        }
        result.sort((x, y) => x - y);
    } else if(nextStep == 1) {
        if(position == '6') {
            result = [];
        } else {
            result.push(position);
            dices_nct += 1;
        }
        for(i = 0; i <= dices_cnt - 1; i++) {
            if(result[i] != undefined) {
                dices_enb[parseInt(result[i], 10) - 1] = true;
                dices_sav[parseInt(result[i], 10) - 1] = dices[parseInt(result[i], 10) - 1];
                if(dices_nct != dices_cnt) {
                    infoStr = "You have already freezed " + dices_nct + " dice(s)!!";
                    warnStr = "";
                    nextStep = 1;
                    stepEnb = true;
                    stepEnb = true;
                } else {
                    infoStr = "";
                    warnStr = "You've freezed all dices you have, jump time finished, let's see your score!!"
                    score = dices_fin.reduce(reducer);
                    nextStep = 2;
                    stepEnb = false;
                }
            }
        }
        result.sort((x, y) => x - y);
    }
    // alert('fooish.com');
    // console.log(dices_cnt);
    // console.log("result : ", result);
    // console.log("dices_enb : ", dices_enb);
    // console.log("dices_sav : ", dices_sav);
    return result;
};

function nextStepSetup() {
    if(nextStep == 1) {
        result = [];
        for(i = 0; i <= dices_cnt - 1; i++) {
            dices_enb[i] = false;
            dices[i] = 0;
            dices_sav[i] = 0;
            dices_fin[i] = 0;
        }
        infoStr = "Jump time now, please throw the dices!!";
        warnStr = "";
        stepEnb = true;
        return "Gain your score";
    } else if(nextStep == 2) {
        result = [];
        for(i = 0; i <= 4; i++) {
            dices_enb[i] = true;
            dices[i] = 0;
            dices_sav[i] = 0;
            dices_fin[i] = 0;
        }
        infoStr = "";
        warnStr = "If you want to play again, please click try again!!";
        throwEnb = true;
        return "I'll try again!";
    } else if(nextStep == 3) {
        result = [];
        for(i = 0; i <= 4; i++) {
            dices_enb[i] = false;
            dices[i] = 0;
            dices_sav[i] = 0;
            dices_fin[i] = 0;
        }
        dices_cnt = 0;
        dices_nct = 0;
        nextStep = 0;
        score = 0;
        infoStr = "Run-up time now, please throw the dices!!";
        warnStr = "";
        stepEnb = true;
        throwEnb = false;
        return "Go to next step";
    }
};

function getScore() {
    if(nextStep == 2) {
        nextStep = 3;
        return "Your score is " + score + " points!!";
    } else {
        return "";
    }
};
