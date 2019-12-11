window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const voiceRecognized = new SpeechRecognition();

voiceRecognized.interimResults = true;

let article = document.createElement('article');
const words = document.querySelector('.words');

words.appendChild(article);

voiceRecognized.addEventListener('results', (e) => {});

article.start();
