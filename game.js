async function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");
    let player1 = "Rocky";
    let player2 = "Drago";
    
    // Set rolling dice GIFs
    diceNum1.setAttribute("src", "diceroll.gif")
    diceNum2.setAttribute("src", "diceroll.gif")
    
    let result = document.querySelector('h1');
    result.innerHTML = "";
    
    // Call the Node.js API to get dice values
    try {
        setTimeout(async () => {
            const apiURL = 'https://dice-roller-nodejs-jo-bpdwfwh7geetb4bd.centralus-01.azurewebsites.net/d6'; // Change this to the correct URL of your Node.js API
            const response = await fetch(apiURL);
            const diceResult = await response.json();

            const randomNumber1 = diceResult.dice1;
            const randomNumber2 = diceResult.dice2;

            diceNum1.setAttribute('src', 'rocky' + randomNumber1 + '.png');
            diceNum2.setAttribute('src', 'drago' + randomNumber2 + '.png');

            // Determine the winner
            if (randomNumber1 === randomNumber2) {
                result.innerHTML = "Draw!";
            } else if (randomNumber1 < randomNumber2) {
                result.innerHTML = (player2 + " WINS!");
            } else {
                result.innerHTML = (player1 + " WINS!");
            }
        }, 2500);
    } catch (error) {
        console.error('Error fetching dice roll from API:', error);
        result.innerHTML = "Error fetching dice roll!";
    }
}