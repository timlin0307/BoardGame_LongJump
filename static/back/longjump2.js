const reducer = (previousValue, currentValue) => previousValue + currentValue; // Array elements summary
var result = [];
var dices = [0, 0, 0, 0, 0];
var dices_cnt = 0;
var dices_nct = 0;
var dices_sav = [0, 0, 0, 0, 0];
var dices_fin = [0, 0, 0, 0, 0];
var dices_str = [];
var dices_enb = [false, false, false, false, false];
var infoStr = "Run-up time now!!";
var warnStr = "Plz throw the dices!!";
var nextStep = 0;
var score = 0;
var showScr = false;
var throwEnb = false;
var showEnb = false;
var stepEnb = true;
var diceNum1 = "./dices/inverted-dice-";
var diceNum2 = "./dices/dice-six-faces-";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

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
};

function getDicesVal(mode) {
    for(i = 0; i <= 4; i++) {
        if(dices_enb[i] == true) {
            dices_fin[i] = dices_sav[i];
        } else {
            dices_fin[i] = dices[i];
        }
    }
    if(mode == 0) {
        for(i = 0; i <= 4; i++) {
            if(dices_enb[i] == true) {
                dices_str[i] = diceNum2 + dices_fin[i] + ".png";
            } else {
                dices_str[i] = diceNum1 + dices_fin[i] + ".png";
            }
        }
    } else {
        for(i = 0; i <= 4; i++) {
            if(dices_enb[i] == true) {
                dices_str[i] = diceNum2 + dices_fin[i] + ".png";
            } else {
                dices_str[i] = diceNum1 + (i + 1) + ".gif";
            }
        }
    }
    // console.log("dices_fin : ", dices_fin);
    return dices_str;
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
                    warnStr = "Keep going!!";
                    nextStep = 0;
                    stepEnb = true;
                    showEnb = false;
                } else if(dices_sav.reduce(reducer) + dices[result[i] - 1] <= 8 && dices_cnt == 5) {
                    dices_enb[parseInt(result[i], 10) - 1] = true;
                    dices_sav[parseInt(result[i], 10) - 1] = dices[parseInt(result[i], 10) - 1];
                    infoStr = "You've freezed all 5 dices!!";
                    warnStr = "Run-up time finished, plz go to next step!!"
                    nextStep = 1;
                    stepEnb = false;
                    showEnb = true;
                } else {
                    for(i = parseInt(result[i], 10) - 1; i <= 4; i++) {
                        dices_enb[i] = true;
                        dices[i] = 0;
                    }
                    dices_cnt -= 1;
                    infoStr = "You've freezed total over 8!!";
                    warnStr = "Run-up time finished, plz go to next step!!"
                    nextStep = 1;
                    stepEnb = false;
                    showEnb = true;
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
                    warnStr = "Keep going!!";
                    nextStep = 1;
                    stepEnb = true;
                    showEnb = false;
                } else {
                    infoStr = "You've freezed all dices you have!!";
                    warnStr = "Jump time finished, let's see your score!!"
                    score = dices_fin.reduce(reducer);
                    nextStep = 2;
                    stepEnb = false;
                    showEnb = true;
                }
            }
        }
        result.sort((x, y) => x - y);
    }
    // alert('fooish.com');
    // console.log(dices_cnt);
    // console.log("result : ", result);
    // console.log("dices_enb : ", dices_enb);
    // console.log("dices : ", dices);
    // console.log("dices_sav : ", dices_sav);
    return result;
};

function nextStepSetup() {
    if(nextStep == 1) {
        result = [];
        for(i = 0; i <= dices_cnt - 1; i++) {
            dices_enb[i] = false;
            dices[i] = 1;
            dices_sav[i] = 1;
            dices_fin[i] = 1;
        }
        infoStr = "Jump time now!!";
        warnStr = "Plz throw the dices!!";
        stepEnb = true;
        showEnb = false;
        return "Gain your score";
    } else if(nextStep == 2) {
        result = [];
        dices_enb = [true, true, true, true, true];
        dices = [0, 0, 0, 0, 0];
        dices_sav = [0, 0, 0, 0, 0];
        dices_fin = [0, 0, 0, 0, 0];
        infoStr = "";
        warnStr = "If you want you can try again!!";
        throwEnb = true;
        return "Return to menu!";
    } else if(nextStep == 3) {
        nextStep = 0;
        // window.location.href = "index2.html";
        // window.open("page.html", "newwindow", "height=100, width=400, top=150, left=500, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
        // window.location.href = "before_index.html";
        return "Go to next step";
    }
};

function getScore() {
    if(nextStep == 2) {
        document.querySelector("#form-button6").textContent = "I wanna Retry!!";
        showEnb = false;
        nextStep = 3;
        showScr = true;
        return "Your score is " + score + " points!!";
    } else {
        showScr = false;
        return "";
    }
};

function ImgChange() {
    if(nextStep == 0) {
        return "./other/running-man-fat.gif"
    } else if(nextStep == 1) {
        return "./other/pool-dive-running-bellyflop.gif";
    } else if(nextStep == 3) {
        if(score >= 20) {
            return "./other/dancing-fat-guy.gif";
        } else {
            return "./other/horny-bonk.gif";
        }
    }
};

function MusicChange() {
    if(nextStep == 3) {
        if(score >= 20) {
            return "./music/Dance sound.mp3";
        } else {
            return "./music/Bonk sound.mp3";
        }
    }
};
