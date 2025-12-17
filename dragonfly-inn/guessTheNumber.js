// Guess the Number Game

let randomNumber;
let attempts = 0;
let guessHistory = [];

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', function() {
    initGame();
    
    const guessBtn = document.getElementById('guess-btn');
    const guessInput = document.getElementById('guess-input');
    const restartBtn = document.getElementById('restart-btn');
    
    // si lo encuentras entoces
    if (guessBtn) {
        guessBtn.addEventListener('click', checkGuess);
    }
    
    if (guessInput) {
        guessInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkGuess();
            }
        });
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', initGame);
    }
});

// Initialize game
function initGame() {
    // Generate random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessHistory = [];
    
    // si encuentra entnces lo pone vacio
    const guessInput = document.getElementById('guess-input');
    if (guessInput) {
        guessInput.value = '';
        guessInput.disabled = false;
    }
    
    // Cargar el mensaje entre 1 y 100
    const message = document.getElementById('message');
    if (message) {
        message.textContent = 'Guess a number between 1 and 100';
        message.className = 'message';
    }
    
    // Update attempts
    updateAttempts();
    
    // Clear guess history display
    updateGuessHistory();
    
    // Enable guess button
    const guessBtn = document.getElementById('guess-btn');
    if (guessBtn) {
        guessBtn.disabled = false;
    }
}

// Check user's guess
function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const message = document.getElementById('message');
    const userGuess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = ' Please enter a valid number between 1 and 100';
        message.className = 'message error';
        return;
    }
    
    // Check if number was already guessed
    if (guessHistory.includes(userGuess)) {
        message.textContent = 'You already tried ' + userGuess + '! Try a different number.';
        message.className = 'message error';
        guessInput.value = '';
        guessInput.focus();
        return;
    }
    
    // Add guess to history
    guessHistory.push(userGuess);
    updateGuessHistory();
    
    attempts++;
    updateAttempts();
    
    // Check if guess is correct
    if (userGuess === randomNumber) {
        message.innerHTML = `<strong>Congrats, you guessed it!</strong><br>Your discount code is: <strong>DRAGONFLY10</strong>.`;
        message.className = 'message';
        message.style.backgroundColor = '#d4edda';
        message.style.color = '#155724';
        message.style.border = '2px solid #28a745';
        message.style.padding = '20px';
        message.style.fontSize = '1.1rem';
        guessInput.disabled = true;
        document.getElementById('guess-btn').disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = ' Higher! The number is greater than ' + userGuess;
        message.className = 'message hint';
    } else {
        message.textContent = 'Lower! The number is less than ' + userGuess;
        message.className = 'message hint';
    }
    
    // Clear input for next guess
    guessInput.value = '';
    guessInput.focus();
}

// Update guess history display
function updateGuessHistory() {
    const guessList = document.getElementById('guessList');
    if (!guessList) return;
    
    if (guessHistory.length === 0) {
        guessList.innerHTML = '<span class="text-muted">No guesses yet</span>';
    } else {
        guessList.innerHTML = guessHistory.map(guess => 
            `<span class="badge bg-secondary" style="font-size: 1rem; padding: 8px 12px;">${guess}</span>`
        ).join(' ');
    }
}

// Update attempts counter
function updateAttempts() {
    const attemptsElement = document.getElementById('attempts');
    if (attemptsElement) {
        attemptsElement.textContent = attempts;
    }
}


