const quizData = [
    {
        question: 'Which country is hosting FIFA World Cup 2022?',
        a: 'Brazil',
        b: 'France',
        c: 'Qatar',
        d: 'Mexico',
        correct: 'c'
    }, {
        question: 'Who is the new CEO of Twitter?',
        a: 'Jack Dorsey',
        b: 'Elon Musk',
        c: 'Parag Agarwal',
        d: 'Evan Williams',
        correct: 'b'
    }, {
        question: 'Which company has recently changed its name to Meta?',
        a: 'Google',
        b: 'Microsoft',
        c: 'Amazon',
        d: 'Facebook',
        correct: 'd'
    }, {
        question: 'Which cryptocurrency is named after a meme?',
        a: 'Bitcoin',
        b: 'Dogecoin',
        c: 'Shiba Inu',
        d: 'Apecoin',
        correct: 'b'
    }, {
        question: 'Which is the most valuable car company in the world?',
        a: 'Tesla',
        b: 'Mercedes',
        c: 'Rolls Royce',
        d: 'Ford',
        correct: 'a'
    }, {
        question: 'How many hearts does an Octopus Have?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'c'
    }, {
        question: 'What is the fullform of NATO?',
        a: 'North Atlantic Treaty Organization',
        b: 'North American Treaty Organization',
        c: 'North African Treaty Organization',
        d: 'North Asian Treaty Organization',
        correct: 'a'
    }, {
        question: 'Who is the founder of Apple?',
        a: 'Jeff Bezos',
        b: 'Bill Gates',
        c: 'Steve Jobs',
        d: 'Elon Musk',
        correct: 'c'
    }, {
        question: 'When was World War II ended?',
        a: '1939',
        b: '1945',
        c: '1947',
        d: '1928',
        correct: 'b'
    }, {
        question: 'Who is the president of the USA?',
        a: 'Donald Trump',
        b: 'Joe Biden',
        c: 'Ali Siddiqui',
        d: 'None of The Above',
        correct: 'b'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You have answered all the questions. Your score is ${score}/${quizData.length}.</h2> 
             <button onClick="location.reload()">Start Again</button>`;
        }
    }

});