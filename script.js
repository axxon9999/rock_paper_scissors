window.computerScore = 0;
        window.playerScore = 0;
        window.tie = 0;
        let playerSelection = "";
        let result = ""
        // Main Game
        function playRound(playerSelection, computerSelection) {
            let player = playerSelection.toLowerCase();
            let status = '';
            let winner = '';
            let loser = '';    
            // If playerSelection is Rock
            if (player === 'rock' && computerSelection === 'paper') {
                status = 'Lose';
                winner = 'Paper';
                loser = 'Rock';
                computerScore++;
            } else if (player === 'rock' && computerSelection === 'scissors') {
                status = 'Win';
                winner = 'Rock';
                loser = 'Scissors';
                playerScore++;
            } else if (player === 'rock' && computerSelection === 'rock') {
                status = 'Tie';
                winner = 'None';
                loser = 'None';
                tie++;
                // return 'It is a tie!';
            }
            // If playerSelection is Scissors
            if (player === 'scissors' && computerSelection === 'paper') {
                status = 'Win';
                winner = 'Scissors';
                loser = 'Paper';
                playerScore++;
            } else if (player === 'scissors' && computerSelection === 'rock') {
                status = 'Lose';
                winner = 'Scissors';
                loser = 'Rock';
                computerScore++;
            } else  if (player === 'scissors' && computerSelection === 'scissors') {
                status = 'Tie';
                winner = 'None';
                loser = 'None';
                tie++;
                // return 'It is a tie!';
            }
            // If playerSelection is Paper
            if (player === 'paper' && computerSelection === 'scissors') {
                status = 'Lose';
                winner = 'Scissors';
                loser = 'Paper';
                computerScore++;
            } else if (player === 'paper' && computerSelection === 'rock') {
                status = 'Win';
                winner = 'Paper';
                loser = 'Rock';
                playerScore++;
            } else if (player === 'paper' && computerSelection === 'paper') {
                status = 'Tie';
                winner = 'None';
                loser = 'None';
                tie++;
                // return 'It is a tie!';
            }
            let select = document.querySelector(".winner");
            select.innerHTML = "";
            if (status === 'Tie') {
                text = document.createTextNode(`It's a ${status}!`);
            } else {
                text = document.createTextNode(`You ${status}! ${winner} beats ${loser}`);
            }
            select.append(text);
            // return `You ${status}! ${winner} beats ${loser}`;
        }

        // Computer Play - Function
        function computerPlay() {
            let num = 0;
            let selection = '';
            // Generate Random Number 1, 2 or 3
            num = Math.floor(Math.random() * 3 + 1);
            // Associate number with Rock, Paper, Scissors
            if (num === 1) 
                selection = 'rock';
                else if (num === 2)
                    selection = 'paper';
                else 
                    selection = 'scissors';
            return selection;
        }
        
        // Call the game five time and report the winner at the end
        function game() {
            //for(let i = 0; i < 5; i++) {
                // const playerSelection = prompt('Rock, Paper or Scissors?');
                
                const computerSelection = computerPlay();
                console.log(playRound(playerSelection, computerSelection));                
            //}
            result = `Player: ${playerScore} - Computer: ${computerScore} - Tie: ${tie}`;
            if (playerScore > computerScore && playerScore == 5) {
                console.log('Player wins!');
                console.log(result);
                let win = "Player";
                printScore(win);
            } else if (computerScore > playerScore && computerScore == 5) {
                console.log('Computer wins!');
                console.log(result);
                let win = "Computer";
                printScore(win);
            } //else
              //  console.log('It is a tie!');
              //  console.log(result);
              function printScore(win) {
                let gameWinner = document.querySelector(".gameWinner");
                let textWinner = document.createTextNode(`${win} wins!`);
                gameWinner.append(textWinner);
                let gameScore = document.querySelector(".score");
                let score = document.createTextNode(result);
                gameScore.append(score);

                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;
              }
        }

        // Start game and final result
        // game();
        

        // event listener button
        // assign player selection in memory
        // game()
        function selectRock(e) {
            playerSelection = 'rock';
            //console.log('Rock!')
            game();
        }

        function selectPaper(e) {
            playerSelection = 'paper';
            //console.log('Paper!')
            game();
        }

        function selectScissors(e) {
            playerSelection = 'scissors';
            //console.log('Scissors!')
            game();
        }        

        //window.addEventListener('click', selectRock);