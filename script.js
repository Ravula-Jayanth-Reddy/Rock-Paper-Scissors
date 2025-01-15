document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, computerChoice);
    
    const computerChoiceImg = document.getElementById('computer-choice-img');
    let index = 0;
    const interval = setInterval(() => {
        computerChoiceImg.src = `images/${choices[index]}_image.png`;
        index = (index + 1) % choices.length;
    }, 100); // Change image every 100ms

    setTimeout(() => {
        clearInterval(interval);
        computerChoiceImg.src = `images/${computerChoice}_image.png`;
        document.getElementById('result').innerText = `${result}`;
    }, 1000); // Stop animation after 1 second
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}