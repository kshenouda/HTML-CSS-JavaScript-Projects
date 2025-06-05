// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');


// Quiz Questions
const quizQuestions = {
    question: 'What is the capital of France?',
    answers: [
        {text: 'London', correct: false},
        {text: 'Berlin', correct: false},
        {text: 'Paris', correct: true},
        {text: 'Madrid', correct: false}
    ],
} // Continue adding questions and answers here

startQuizButton.addEventListener('click', function()  {
    console.log('Start Quiz');
});