let score = 0;

function playGame(playerChoice) {

    let choices = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    let computerChoice = choices[randomIndex];

    document.getElementById("player").innerText =
        "You: " + playerChoice;

    document.getElementById("computer").innerText =
        "Computer: " + computerChoice;

    let result = "";

    // Draw
    if (playerChoice === computerChoice) {
        result = "🤝 Draw";
    }

    // Win conditions
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {

        result = "✅ You Win!";
        score++;

    }

    // Lose
    else {
        result = "❌ You Lose!";
    }

    document.getElementById("result").innerText =
        "Result: " + result;

    document.getElementById("score").innerText =
        score;
}