const bets = document.querySelector('#bet');
const text = document.querySelector(".text");
const declareResult = document.querySelector('.result');
const winningText = "Congragulations! You Won"
const loosingText = "Ooops! Better Luck Next Time"
let count = 0
let selectedBet = ""


bets.addEventListener(`change`, (e) => {
    selectedBet = e.target.value;
    text.innerHTML = `You choose to bet for ${selectedBet} <br> You have 3 tries Good Luck Player!`
    count = 0
    declareResult.innerHTML = ""
})

function render() {
    count++

    //for image 1
    let [randomDiceImageLink, randomNumber1] = getRandomDiceNumber()
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageLink);

    //for image 2
    let [randomDiceImageLink2, randomNumber2] = getRandomDiceNumber()
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageLink2);

    let result = randomNumber1 + randomNumber2
    if (selectedBet == "Lucky 7") {
        if (result == 7) {
            declareResult.innerHTML = winningText
            count = 0
        } else {
            if (count < 3) {
                displayLeftChances(3 - count)
            } else {
                declareResult.innerHTML = loosingText
                count = 0
            }
        }
    } else if (selectedBet == "7 Up") {
        if (result > 7) {
            declareResult.innerHTML = winningText
            count = 0
        } else {
            if (count < 3) {
                displayLeftChances(3 - count)
            } else {
                declareResult.innerHTML = loosingText
                count = 0
            }
        }
    } else {
        if (result < 7) {
            declareResult.innerHTML = winningText
            count = 0
        } else {
            if (count < 3) {
                displayLeftChances(3 - count);
            } else {
                declareResult.innerHTML = loosingText
                count = 0
            }
        }
    }
}

function getRandomDiceNumber() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    let randomDiceImageLink = "images/dice" + randomNumber + ".png";
    return [randomDiceImageLink, randomNumber]
}

function displayLeftChances(leftChances) {
    declareResult.innerHTML = `Don't Worry! You stil have ${leftChances} chances`
}