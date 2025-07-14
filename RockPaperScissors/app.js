const compChoiceDisplay = document.getElementById("comp_choice")
const userChoiceDisplay = document.getElementById("user_choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let compChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = userChoice
    compChoiceDisplay.innerHTML = generateCompChoice()
    resultDisplay.innerHTML = getResult();
}))

function generateCompChoice() {
    const num = Math.floor(Math.random() * 3) + 1
    switch (num) {
        case (1):
            compChoice = "Rock"
            break;
        case (2):
            compChoice = "Paper"
            break;
        case (3):
            compChoice = "Scissors"
            break;
        default:
            alert("Special case");
    }
    return compChoice;

    
}

function getResult() {
    console.log(compChoice, userChoice)
    if (compChoice === "Rock" && userChoice === "Paper") {
        result = "Player wins!"
        console.log(100)
    }
    else if (compChoice === "Rock" && userChoice === "Scissors") {
        result = "Computer wins!"
        console.log(500)
    }
    else if (compChoice === "Paper" && userChoice === "Rock") {
        result = "Computer wins!"
    }
    else if (compChoice === "Paper" && userChoice === "Scissors") {
        result = "Player wins!"
    }
    else if (compChoice === "Scissors" && userChoice === "Rock") {
        result = "Player wins!"
    }
    else if (compChoice === "Scissors" && userChoice === "Paper") {
        result = "Computer wins!"
    }
    else {
        result = "Draw!"
    }
    return result;
}