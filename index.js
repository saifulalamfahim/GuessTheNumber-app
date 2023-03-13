let computersGuess;
let userGuess = [];
let userGuessNumber = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("./audio/esm_5_wickets_sound_fx_arcade_casino_kids_mobile_app.mp3");

const init = () => {
    computersGuess = Math.floor(Math.random() * 100);
    document.getElementById("newgameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}


const starGame = () => {
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("gameArea").style.display = "block";
}

const newGameBegin = () => {
    window.location.reload();
}

const  startNewGame = () => {
    document.getElementById("newgameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}

const compareGuess = () => {
         audio.play();
        const userNumber = Number(document.getElementById("inputBox").value);
        userGuess = [ ...userGuess, userNumber];   
        document.getElementById("guesses").innerHTML = userGuess;

       
        if(userGuess.length < maxGuess) {
            if (userNumber > computersGuess ) {
                userGuessNumber.innerHTML = "Your guess is High";
                userNumberUpdate.value = "";
        } else if (userNumber < computersGuess) {
            userGuessNumber.innerHTML = "Your guess is Low";
            userNumberUpdate.value = "";
        } else {
            userGuessNumber.innerHTML = "It's Correct";
            startNewGame();
            userNumberUpdate.value = "";
        }

        } else {
            if (userNumber > computersGuess ) {
                userGuessNumber.innerHTML = `You Loose!! correct number was ${computersGuess}`;
                startNewGame();
                userNumberUpdate.value = "";
        } else if (userNumber < computersGuess) {
            userGuessNumber.innerHTML = `You Loose!! correct number was ${computersGuess}`;
            startNewGame();
            userNumberUpdate.value = "";
        } else {
            userGuessNumber.innerHTML = "It's Correct";
            startNewGame();
            userNumberUpdate.value = "";
        }

        }

        document.getElementById("attempts").innerHTML = userGuess.length;
}

const easyMode = () => {
    audio.play();
    maxGuess = 10;
     starGame()
}
const hardMode = () => {
    audio.play();
    maxGuess = 5;
    starGame()
}