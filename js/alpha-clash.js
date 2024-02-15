function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}

function getRandomAlphabet() {
    // const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
    // const allAlphabet = alphabetsString.split('');

    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const randomNumber = Math.random() * 25;
    const randomIndex = Math.round(randomNumber);
    const alphabet = alphabets[randomIndex];
    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function gameLoop() {
    // step-1: Random alphabet generate
    const alphabet = getRandomAlphabet();
    // step-2: set random alphabet on the current alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}


function keyboardKeyUp(event) {

    const playerPressed = event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {
        const currentScoreElement = document.getElementById('current-score');
        const currentScore = parseInt(currentScoreElement.innerText);

        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        // const currentScoreElementNew = currentScoreElement.innerText = newScore;

        // score section value added.
        const resultScore = document.getElementById('result-score');
        resultScore.innerText = newScore;

        removeBackgroundColorById(playerPressed);
        gameLoop();
    } else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLife = parseInt(currentLifeElement.innerText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        if (newLife === 0) {
            hideElementById('play-ground');
            showElementById('final-score');
        }
    }
}

document.addEventListener('keyup', keyboardKeyUp);

function play() {

    // // step-1: hide the home screen
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden');

    // // step-2: show the playground section
    // const playGroundSection = document.getElementById('play-ground');
    // playGroundSection.classList.remove('hidden');

    hideElementById('home-screen');
    showElementById('play-ground');
    gameLoop();
}


function playAgain() {
    hideElementById('final-score');
    showElementById('play-ground');
    // const currentLifeElement = document.getElementById('current-life');
    // currentLifeElement.innerText = 5;
    document.getElementById('current-life').innerText = 5;
    document.getElementById('current-score').innerText = 0;
    const resultScore = document.getElementById('result-score');
    resultScore.innerText = 0;
}


function backHome() {
    hideElementById('final-score');
    showElementById('home-screen');
    document.getElementById('current-life').innerText = 5;
    document.getElementById('current-score').innerText = 0;

}
