function randomDice() {
    return Math.floor((Math.random() * 6) + 1);
}

function getPlayerScores() {
    players = {
        score1: randomDice(),
        score2: randomDice(), 
    };
    return players;
}

function findWinner(player1Score, player2Score){
    if (player1Score > player2Score){
        return "Player 1 wins!";
    }
    if (player2Score > player1Score){
        return "Player 2 wins!";
    }
    else {
        return "It's a draw!";
    } 
}

function getImages(scores) {
    let player1img = document.getElementsByClassName("img1")[0];
    let player2img = document.getElementsByClassName("img2")[0];

    player1img.src = "/images/dice" + scores.score1.toString() + ".png";
    player2img.src = "/images/dice" + scores.score2.toString() + ".png";
    
    return 1;  
}

function getHeader(result){
    let resultHeader = document.getElementById("resultHeader");

    resultHeader.textContent = result;

    return 1;
}


function playRound() {
    let scores = getPlayerScores();
        // testing
        // console.log(scores.score1, scores.score2);

    let result = findWinner(scores.score1, scores.score2);
    getImages(scores);
    getHeader(result);
    return result;
}

playRound();