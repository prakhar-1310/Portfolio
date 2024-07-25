const typingAnimationElement = document.getElementById('typing-animation');

const typingTexts = [
'CS-Engineer ',
'Front-end developer  ',
"Student @GLAU'27",
    ];

function playTypingAnimation(text) {

for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
    typingAnimationElement.textContent += text[i];
    }, i * 300);
    }

setTimeout(() => {
    typingAnimationElement.textContent = '';
    playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
}, text.length * 300);
}

playTypingAnimation(typingTexts[0]);
