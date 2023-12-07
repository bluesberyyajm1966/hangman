const categories = {
    sports: ['basketball', 'soccer', 'tennis', 'baseball', 'volleyball'],
    school: ['teacher', 'student', 'pencil', 'book', 'classroom'],
    boardgames: ['monopoly', 'scrabble', 'chess', 'risk', 'clue'],
    videogames: ['minecraft', 'fortnite', 'zelda', 'pokemon', 'fallout'],
    food: ['pizza', 'burger', 'sushi', 'pasta', 'icecream'],
    vehicles: ['car', 'bike', 'bus', 'truck', 'plane']
};

let selectedCategory = 'sports'; // Default category
let selectedWord = '';
let guessedWord = [];
let wrongLetters = [];
let attempts = 6;

function initializeGame() {
    selectedWord = getRandomWord(categories[selectedCategory]);
    guessedWord = Array(selectedWord.length).fill('_');
    wrongLetters = [];
    attempts = 6;

    displayWord();
    updateAttempts();
    updateWrongLetters();
    updateHangmanVisual();
}

function getRandomWord(wordList) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function displayWord() {
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.textContent = guessedWord.join(' ');
}

function updateAttempts() {
    document.getElementById('attempts').textContent = attempts;
}

function updateWrongLetters() {
    const wrongLettersDisplay = document.getElementById('wrong-letters');
    wrongLettersDisplay.textContent = wrongLetters.length > 0 ? `Wrong Letters: ${wrongLetters.join(', ')}` : '';
}

function updateHangmanVisual() {
    const hangmanVisual = document.getElementById('hangman-visual');
    hangmanVisual.innerHTML = '';

    const parts = 6 - attempts; // Number of parts to draw
    for (let i = 0; i < parts; i++) {
        const part = document.createElement('div');
        part.className = 'hangman-part';
        hangmanVisual.appendChild(part);
    }
}

function makeGuess() {
    const letterInput = document.getElementById('letter-input');
    const guessedLetter = letterInput.value.toLowerCase();

    if (!guessedLetter.match(/[a-z]/i)) {
        alert('Please enter a valid letter.');
        return;
    }

    if (guessedWord.includes(guessedLetter) || wrongLetters.includes(guessedLetter)) {
        alert('You already guessed this letter.');
        return;
    }

    if (selectedWord.includes(guessedLetter)) {
        updateGuessedWord(guessedLetter);
        if (!guessedWord.includes('_')) {
            endGame(true);
        }
    } else {
        wrongLetters.push(guessedLetter);
        attempts--;
        updateWrongLetters();
        updateAttempts();
        if (attempts === 0) {
            endGame(false);
        }
        updateHangmanVisual();
    }

    letterInput.value = '';
}

function updateGuessedWord(letter) {
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            guessedWord[i] = letter;
        }
    }
    displayWord();
}

function endGame(isWinner) {
    const message = isWinner ? 'Congratulations! You guessed the word.' : `Sorry, you ran out of attempts. The word was "${selectedWord}".`;
    alert(message);
    initializeGame();
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initializeGame);

// Add event listener to category dropdown
document.getElementById('category-select').addEventListener('change', function() {
    selectedCategory = this.value;
    initializeGame();
});
