let messageIndex = 0;
const messages = [
    "Are you sure?", "Really sure??", "Are you positive?", "Please reconsider...",
    "Think about it!", "If you say no, I will be sad...", "I will be VERY sad...",
    "I will be VERY VERY sad...", "Ok fine, I will stop...", "Just kidding, say yes please! ❤️"
];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    fetch('/send-email', { method: 'POST' })
        .then(() => window.location.href = 'yes_page.html');
}