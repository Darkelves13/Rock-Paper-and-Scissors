function playGame(playerMove){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber > 0 && randomNumber < 1 / 3){
        computerMove = 'Rock';
    }else if(randomNumber > 0 && randomNumber < 2 / 3){
        computerMove = 'Paper';
    }else if(randomNumber > 2 / 3 && randomNumber < 1){
        computerMove = 'Scissors';
    }

    let result = '';
    if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'It is a Tie!';
        }else if(computerMove === 'Paper'){
            result = 'You Lose!'
        }else if(computerMove === 'Scissors'){
            result = 'You Win!'
        }
    }else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'You Win!';
        }else if(computerMove === 'Paper'){
            result = 'It is a Tie!'
        }else if(computerMove === 'Scissors'){
            result = 'You Lose!'
        }
    }else if(playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'You Lose!';
        }else if(computerMove === 'Paper'){
            result = 'You Win!'
        }else if(computerMove === 'Scissors'){
            result = 'It is a Tie!'
        }
    }

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}