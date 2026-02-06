let randomNumber = parseInt(Math.random() * 100 + 1);

// Select elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validguess(guess);

    })

}

function validguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid guess')
    }
    else if(guess < 1){
        alert('please enter number more than 1')
    }
    else if(guess > 100){
        alert('enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`game over random number was this ${randomNumber}`)
            endgame();
            
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

    
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guess it right`)
    }
    else if(guess > randomNumber){
        displayGuess(`number is too high`)
    }
    else if(guess < randomNumber){
        displayGuess(`number is too low`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  ,`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`


}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">start new game</h2>`
    startOver.appendChild(p);
    playGame(false);
    newgame();
    

}

function newgame(){
    const newGameBttn = document.querySelector('#newgame');
    newGameBttn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;

    })



}

