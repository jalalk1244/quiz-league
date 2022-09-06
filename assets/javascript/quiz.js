// All the constansts
const startButton = document.getElementById('start-button');
const answerBox = document.getElementById('answer-box');
const theQuestion = document.getElementById('question');
const nexButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const timerBar = document.getElementById('timer');
const messageAndImageHolder = document.getElementById('message-and-image-holder');
let username;
console.log(username);

// close menu when clicked outside it
window.addEventListener('mouseup', function(e) {
  let navListContainer = document.getElementsByClassName('toggle-nav-list-container')[0];
  if(e.target !== navListContainer && e.target.parentNode !== navListContainer) {
    navListContainer.style.display = 'none';
  }
})

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
function startGame(e) {
  e.preventDefault();
  username = document.getElementById('username').value;
  let startSection = document.getElementById('start-page');
  let quizSection = document.getElementById('quiz-section');
  let restartSection = document.getElementById('restart');
  restartSection.classList.add('hidden');
  startSection.classList.add('hidden');
  suffle(questions);
  currentQuestionIndex = 0;
  score = 0;
  updateScore();
  resetProgressCircles();
  displayQuestion ();
  quizSection.classList.remove('hidden');
  updateQuestionNumber();
  startTimer();
  currentTime = 0;
  return false
 }



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
      "question" : 'If there is a clean sheet, how many goals were scored?',
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

    const {answerA, answerB, answerC, answerD} = questions[currentQuestionIndex]
    answerBox.innerHTML = `
    <button class="answer-button" id="a" onclick="controllAnswer(event);">${answerA}</button>
    <button class="answer-button" id="b" onclick="controllAnswer(event);">${answerB}</button>
    <button class="answer-button" id="c" onclick="controllAnswer(event);">${answerC}</button>
    <button class="answer-button" id="d" onclick="controllAnswer(event);">${answerD}</button>
    `
}


let buttons = document.getElementsByClassName('answer-button');
let score = 0;

function controllAnswer(event) {
    let choice = event.target.id;
    //Disable buttons after click
    for (let button of buttons) {
      button.disabled = true;
    }

    //if answer is correct
    if(choice === questions[currentQuestionIndex].correctAnswer) {
        score += 10;
        event.target.classList.add('answer-right');
        for (let button of buttons) {
          if(button.id !== questions[currentQuestionIndex].correctAnswer) {
            button.classList.add('answer-wrong');
          }
        }
        displayProgressRight();
        updateScore();
    }else { //if answer is wrong
        event.target.classList.add('answer-wrong');
        displayProgressWrong();
    }
    //display the next question
    if(currentQuestionIndex < lastQuestion) {
        nexButton.classList.remove('hidden');
    }else {
        let restartSection = document.getElementById('restart');
        showOverAllScore();
        restartSection.classList.remove('hidden'); //Show the restart section
    }
    clearInterval(interval); // stop the timer
}

function reset() {
    while (answerBox.firstChild) {
        answerBox.removeChild(answerBox.lastChild);
    }
    nexButton.classList.add('hidden');
    if (currentQuestionIndex < lastQuestion) {
        currentQuestionIndex++;
        displayQuestion();
        updateQuestionNumber();
        startTimer();
        currentTime = 0;
    }
}
nexButton.addEventListener('click', reset); // Reset to default after every question

function displayProgressWrong() {
  let progressCircles = document.getElementsByClassName('progress-circle');
  progressCircles[currentQuestionIndex].style.backgroundColor = 'red';
}

function displayProgressRight() {
  let progressCircles = document.getElementsByClassName('progress-circle');
  progressCircles[currentQuestionIndex].style.backgroundColor = 'green';
}

function resetProgressCircles() {
  let progressCircles = document.getElementsByClassName('progress-circle');
  for(let cricle of progressCircles) {
    cricle.style.backgroundColor = "transparent"
  }
}

function restartQuiz() {
  let startSection = document.getElementById('start-page');
  let quizSection = document.getElementById('quiz-section');
  quizSection.classList.add('hidden');
  startSection.classList.remove('hidden');
}
restartButton.addEventListener('click', restartQuiz); // got to home page


let interval;
let currentTime = 0;

//Timer every question
function timingQuestions() {
  let timeForEveryQuestion = 30; // 30s
  let timeDivWidth = 210; // 210px
  let timeDivWidthForEverySecond = timeDivWidth / timeForEveryQuestion; // 7px
  if (currentTime <= timeForEveryQuestion) {
    console.log(currentTime);
    timerBar.style.width = currentTime * timeDivWidthForEverySecond + 'px';
    currentTime++;
  }
  else {
    clearInterval(interval);
    // Disable buttons after click
    for (let button of buttons) {
      button.disabled = true;
      }
      displayProgressWrong();
      //display the next question
    if (currentQuestionIndex < lastQuestion) {
      nexButton.classList.remove('hidden');
    }
    else {
      let restartSection = document.getElementById('restart');
      showOverAllScore();
      restartSection.classList.remove('hidden'); //Show the restart section
    }
  }
}

function startTimer() {
  interval = setInterval(timingQuestions, 1000);
}

function updateQuestionNumber () {
  let questionNumber = document.getElementById('question-number');
  questionNumber.innerHTML = `${currentQuestionIndex + 1} / ${questions.length}`;
}

function updateScore() {
  let scoreSpan = document.getElementById('score');
  scoreSpan.innerHTML = `${score}`;
}

//Show the overall score based on the answers
function showOverAllScore() {
  let result = Math.round(10 * (score / questions.length));
  messageAndImageHolder.innerHTML = 
  (result >= 100) ? // when the user answers 100% right
  `
  <p id="overall-score-message">Congratulations ${username}! You have won the World Cup</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/world-cup-trophy.jpg" alt="World Cup trophy">
  </div>
  `:
  (result >= 80) ? // when the user answers above 80% right
  `
  <p id="overall-score-message">Congratulations you have won the Champions League</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/champions-league-trophy.jpg" alt="champions league trophy">
  </div>
  `:
  (result >= 60) ? // when the user answers above 60% right
  `
  <p id="overall-score-message">Congratulations you have won the Europa League</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/europa-league-trophy-removebg-preview.jpg" alt="World Cup trophy">
  </div>
  `:
  (result >= 40) ?  // when the user answers above 40% right
  `
  <p id="overall-score-message">Congratulations you have won the Premier League</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/premier-league-trophy.jpg" alt="World Cup trophy">
  </div>
  `: 
  (result >= 20) ? // when the user answers above 20% right
  `
  <p id="overall-score-message">Congratulations you have won the Conference League</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/conference-league-trophy.jpg" alt="World Cup trophy">
  </div>
  `: // when the user answer under 10% right
  `
  <p id="overall-score-message">You didn't win any trophies this time, better luck next time!</p>
  `;             
}

// suffle array
function suffle(array){
  for(let i = 0; i < array.length; i++) {
    let runningQuestion = array[i];
    let randomIndex = Math.floor(Math.random() * array.length);
    array[i] = array[randomIndex];
    array[randomIndex] = runningQuestion;
  }
}