function popupName() {
    let text;
    var maxChars = 9;
    let person = prompt("Please enter your name (Max length 9 words) : ", "Anonymous");
    if (person == null || person == "") {
        text = "Anonymous";
    } else {
        text = person;
    }
    // console.log(text.substring(0, maxChars));
    return text.substring(0, maxChars);
}
/*window.addEventListener('load', (event) => {
    document.getElementById("myAudio")
    if (confirm("Play the music") == true) {
        playMusic = true;
    } else {
        playMusic = false;
    }
    console.log(playMusic);
})*/
