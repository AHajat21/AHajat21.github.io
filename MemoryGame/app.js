const cardArray = [
    {
        name: 'cheeseburger',
        img: "images/cheeseburger.png"
    },
    {
        name: 'fries',
        img: "images/fries.png"
    },
    {
        name: 'hotdog',
        img: "images/hotdog.png"
    },
    {
        name: 'ice-cream',
        img: "images/ice-cream.png"
    },
    {
        name: 'milkshake',
        img: "images/milkshake.png"
    },
    {
        name: 'pizza',
        img: "images/pizza.png"
    },
    {
        name: 'cheeseburger',
        img: "images/cheeseburger.png"
    },
    {
        name: 'fries',
        img: "images/fries.png"
    },
    {
        name: 'hotdog',
        img: "images/hotdog.png"
    },
    {
        name: 'ice-cream',
        img: "images/ice-cream.png"
    },
    {
        name: 'milkshake',
        img: "images/milkshake.png"
    },
    {
        name: 'pizza',
        img: "images/pizza.png"
    }

]
let counter = 0;
let crds = [];
let score = 0;

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const scoreDisplay = document.querySelector("#score");
createBoard();

function createBoard() {
    //cardArray.forEach((_, i) => {
    //const card = document.createElement("img");
    //card.setAttribute("src", "images/blank.png");
    //card.setAttribute("data-id", i);
    //gridDisplay.appendChild(card);
    //});
    scoreDisplay.innerHTML = score;
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}


function flipCard() {
    crds[counter] = this;
    this.setAttribute("src", cardArray[this.getAttribute("data-id")].img);
    this.removeEventListener("click", flipCard);
    counter++;
    if (counter === 2) {
        setTimeout(checkMatch, 500);

    }
}

function checkMatch() {
    if (crds[0].getAttribute("src") == crds[1].getAttribute("src")) {
        crds[0].setAttribute("src", "images/white.png");
        crds[1].setAttribute("src", "images/white.png");
        score+=10;
        checkWin();
    }
    else {
        crds[0].setAttribute("src", "images/blank.png");
        crds[1].setAttribute("src", "images/blank.png");
        crds[0].addEventListener("click", flipCard);
        crds[1].addEventListener("click", flipCard);
        score -= 5;
    }
    scoreDisplay.innerHTML = score;
    counter = 0;
    checkWin();
}

function checkWin() {
    if (score === 6) {
        scoreDisplay.innerHTML = "You win with (" + score + "( points";
    }
}
