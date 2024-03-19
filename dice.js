
let randomNumber1 = 0;
let randomNumber2 = 0;

function getRandomNumber() {
    let number = 0;
    number = Math.floor(Math.random() * 6) + 1;  // A random number between 1 and 6
    return number;
}

randomNumber1 = getRandomNumber();
randomNumber2 = getRandomNumber();

const image1 = document.getElementsByClassName('img1')[0];
const image2 = document.getElementsByClassName('img2')[0];

 function getDiceImage(img, value) {
    switch(value) {
        
        case value = 1:
        return img.src = "./images/dice1.png"
        break;

        case value = 2: 
        return img.src = "./images/dice2.png"
        break;

        case value = 3: 
        return img.src = "./images/dice3.png"
        break;

        case value = 4: 
        return img.src = "./images/dice4.png"
        break;

        case value = 5: 
        return img.src = "./images/dice5.png"
        break;

        default:
        return img.src = "./images/dice6.png";
    }
}

getDiceImage(image1, randomNumber1);
getDiceImage(image2, randomNumber2);

if (randomNumber1 > randomNumber2) {
    document.getElementById('h1').textContent = "🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.getElementById('h1').textContent = "Player 2 Wins! 🚩";
}
else {
    document.getElementById('h1').textContent = "It's a Tie!";
}

