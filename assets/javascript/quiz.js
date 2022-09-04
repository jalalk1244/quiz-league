// All the constansts
const startButton = document.getElementById('start-button');
const answerBox = document.getElementById('answer-box');
const theQuestion = document.getElementById('question');
const nexButton = document.getElementById('next-button');

// Open the menu when the toggle button is clicked
function openMenu(){
    let navListContainer = document.getElementsByClassName('toggle-nav-list-container')[0];

    if (navListContainer.style.display === "none") {
        navListContainer.style.display = "block";
      } else {
        navListContainer.style.display = "none";
      }
  }


// Navigate section to section
function linkNavigation (event) {
    let elementId = event.target.id;
    console.log(elementId);
    let infoSection = document.getElementById('info-section');
    let home = document.getElementById('home');
    let contactSection = document.getElementById('contact-section')
    if (elementId === 'home-link' || elementId === 'toggle-home-link') {
        console.log('Home')
        infoSection.classList.add('hidden');
        contactSection.classList.add('hidden');
        home.classList.remove('hidden');
    } else if (elementId === 'rules-link' || elementId === 'toggle-rules-link') {
        console.log('Contact or Rules')
        infoSection.classList.remove('hidden');
        home.classList.add('hidden');
        contactSection.classList.add('hidden');
    } else if (elementId === 'contact-link' || elementId === 'toggle-contact-link') {
        contactSection.classList.remove('hidden');
        home.classList.add('hidden');
        infoSection.classList.add('hidden');
    }
}

let links = document.getElementsByClassName('nav-link');
for (let link of links) {
    link.addEventListener('click', linkNavigation);
}

// Sart the quiz
function startGame() {
    let startSection = document.getElementById('start-page');
    let quizSection = document.getElementById('quiz-section');
    startSection.classList.add('hidden');
    displayQuestion();
    quizSection.classList.remove('hidden');
   }

  startButton.addEventListener('click', startGame);



  // The quiz questions in an array of objects
let questions = [
    {
      "question" : 'Which football club did Lionel Messi join in 2021?',
      "answerA"  : 'FC Barcelona',
      "answerB"  : 'Chelsea',
      "answerC"  : 'Paris Saint-Germain ',
      "answerD"  : 'Manchester United',
      "correctAnswer" : "c"
    },{
      "question" : 'How often is the FIFA World Cup?',
      "answerA"  : 'Every 10 years',
      "answerB"  : 'Every 5 years',
      "answerC"  : 'Every 2 years',
      "answerD"  : 'Every 4 years',
      "correctAnswer" : "d"
    },{
      "question" : 'How long is a standard football game?',
      "answerA"  : '45 min',
      "answerB"  : '120 min',
      "answerC"  : '90 min',
      "answerD"  : '100 min',
      "correctAnswer" : "c"
    },{
      "question" : 'In there is a clean sheet, how many goals were scored?',
      "answerA"  : '0',
      "answerB"  : 'Less than 10',
      "answerC"  : '1',
      "answerD"  : 'Less than 5',
      "correctAnswer" : "a"
    },{
      "question" : 'How many players make a football team?',
      "answerA"  : '7',
      "answerB"  : '11',
      "answerC"  : '22',
      "answerD"  : '9',
      "correctAnswer" : "b"
    },{
      "question" : 'Which of the following is not a football team in England?',
      "answerA"  : 'Chelsea FC',
      "answerB"  : 'Tottenham Hotspur FC',
      "answerC"  : 'Everton FC',
      "answerD"  : 'New England Revolution',
      "correctAnswer" : "d"
    },{
      "question" : 'What are the two primary football teams in Manchester, England?',
      "answerA"  : 'FC Barcelona and Real Madrid',
      "answerB"  : 'Milan and Inter',
      "answerC"  : 'Man United and Man City',
      "answerD"  : 'Bayern Munich and Borussia Dortmund',
      "correctAnswer" : "c"
    },{
      "question" : 'what is the most watched football competition?',
      "answerA"  : 'World Cup',
      "answerB"  : 'Champions League',
      "answerC"  : 'Premier league',
      "answerD"  : 'Europa League',
      "correctAnswer" : "a"
    },{
      "question" : 'Which country is Ronaldo from?',
      "answerA"  : 'Argentina',
      "answerB"  : 'Brazil',
      "answerC"  : 'England',
      "answerD"  : 'Portugal',
      "correctAnswer" : "d"
    },{
      "question" : 'What is the standard size of a football pitch?',
      "answerA"  : '125 m x 85 m',
      "answerB"  : '155 m x 95 m',
      "answerC"  : '175 m x 105 m',
      "answerD"  : '195 m x 110 m',
      "correctAnswer" : "a"
    }
  ];

let lastQuestion = questions.length - 1;
let currentQuestionIndex = 0; 

function displayQuestion() {
    theQuestion.innerHTML = questions[currentQuestionIndex].question;

    answerBox.innerHTML = `
    <button class="answer-button" id="a" onclick="controllAnswer(event);">${questions[currentQuestionIndex].answerA}</button>
    <button class="answer-button" id="b" onclick="controllAnswer(event);">${questions[currentQuestionIndex].answerB}</button>
    <button class="answer-button" id="c" onclick="controllAnswer(event);">${questions[currentQuestionIndex].answerC}</button>
    <button class="answer-button" id="d" onclick="controllAnswer(event);">${questions[currentQuestionIndex].answerD}</button>
    `
}

function reset() {
    while (answerBox.firstChild) {
        answerBox.removeChild(answerBox.lastChild);
    }
    nexButton.classList.add('hidden');
    if (currentQuestionIndex < lastQuestion) {
        currentQuestionIndex++;
        displayQuestion();
    }
}
nexButton.addEventListener('click', reset); // Reset to default after every question