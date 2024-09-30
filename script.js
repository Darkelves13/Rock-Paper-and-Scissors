let scoreList = JSON.parse(localStorage.getItem('scoreList'));

if(scoreList === null){
    scoreList = {
        win: 0,
        tie: 0,
        lose: 0
    }
}

updateScoreBoard();

function playGame(playerMove){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'Rock';
    }else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'Paper';
    }else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    let result = '';
    if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'It is a Tie!';
            scoreList.tie += 1;
        }else if(computerMove === 'Paper'){
            result = 'You Lose!'
            scoreList.lose += 1;
        }else if(computerMove === 'Scissors'){
            result = 'You Win!'
            scoreList.win += 1;
        }
    }else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You Win!';
            scoreList.win += 1;
        }else if(computerMove === 'Paper'){
            result = 'It is a Tie!'
            scoreList.tie += 1;
        }else if(computerMove === 'Scissors'){
            result = 'You Lose!'
            scoreList.lose += 1;
        }
    }else if(playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'You Lose!';
            scoreList.lose += 1;
        }else if(computerMove === 'Paper'){
            result = 'You Win!'
            scoreList.win += 1;
        }else if(computerMove === 'Scissors'){
            result = 'It is a Tie!'
            scoreList.tie += 1;
        }
    }

    localStorage.setItem('scoreList', JSON.stringify(scoreList));
    
    resultBoard(result);
    movesBoard(computerMove, playerMove);
    updateScoreBoard();
}

function resetScore(){
    scoreList.win = 0;
    scoreList.tie = 0;
    scoreList.lose = 0;
    localStorage.removeItem('scoreList');

    document.querySelector('.js-moves').innerHTML = '';
    document.querySelector('.js-result').innerHTML = 'The game is Reset!!';

    updateScoreBoard();
}

function resultBoard(result){
    document.querySelector('.js-result').innerHTML = result;
}

function movesBoard(computerMove, playerMove){
    document.querySelector('.js-moves').innerHTML = `You: ${playerMove} & Computer: ${computerMove}`;
}

function updateScoreBoard(){
    document.querySelector('.js-score-sheet')
        .innerHTML = `Win: ${scoreList.win}, Tie: ${scoreList.tie}, Lose: ${scoreList.lose}`;
}