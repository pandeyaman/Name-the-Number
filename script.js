var randomNumber,currentScore, currentHighScore;
function randomGenerator(){
     randomNumber = Math.floor(Math.random()*99);
    console.log(randomNumber);
}
randomGenerator();

function guessIsHigh(){
    document.querySelector(".span-comments").textContent  = "High, guess a bit low"; 
    reduceScore();
}

function guessIsLow(){
    document.querySelector(".span-comments").textContent  = "Low, guess something high"; 
    reduceScore();
}

function correctGuess(){
    document.querySelector(".span-comments").textContent = "Correct Guess";  
    currentHighScore = Number(document.querySelector(".span-highscore").textContent);
    currentScore = Number(document.querySelector(".span-score").textContent);
    if(currentScore>=currentHighScore)   
    document.querySelector(".span-highscore").textContent = currentScore;
    document.querySelector(".span-random-number").innerHTML=randomNumber;
}

function reduceScore(){
    currentScore = Number(document.querySelector(".span-score").innerHTML);
    currentScore--;
    if(currentScore>0){
        document.querySelector(".span-score").innerHTML = Number(currentScore);
    }
    else{
        document.querySelector(".span-score").innerHTML = Number(currentScore);
        document.querySelector(".span-comments").innerHTML = "You Lost the Game! Better luck next time"
        document.querySelector(".btn-check").disabled = true;
    }
    
}

function retryGame(){
    randomGenerator();
    document.querySelector(".span-comments").textContent = "Start Guessing...";        
    document.querySelector(".span-score").textContent = "20";
    document.querySelector(".input-number").value="";
    document.querySelector(".span-random-number").innerHTML="?";
}


document.querySelector(".btn-check").addEventListener('click',function(){
    let guessInput = Number(document.querySelector(".input-number").value);
    console.log(guessInput);
    if(!guessInput){
        document.querySelector(".span-comments").textContent="No Number!"
    }
    else if(guessInput==randomNumber){
        correctGuess();
    }
    else if(guessInput>randomNumber){
        guessIsHigh();
    }
    else{
        guessIsLow();
    }
})

document.querySelector(".btn-retry").addEventListener('click',retryGame);



