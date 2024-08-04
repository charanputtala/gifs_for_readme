const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How does a penguin build its house? Igloos it together.",
    "Why don't scientists trust atoms? Because they make up everything!"
];

function generateJoke() {
    const jokeElement = document.getElementById('joke');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
    jokeElement.style.color = getRandomColor();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
