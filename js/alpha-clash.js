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

function gameLoop() {
    // step-1: Random alphabet generate
    const alphabet = getRandomAlphabet();
    // step-2: set random alphabet on the current alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

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