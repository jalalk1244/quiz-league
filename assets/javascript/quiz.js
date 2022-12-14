// All the constansts
const answerBox = document.getElementById('answer-box');
const theQuestion = document.getElementById('question');
const nexButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const timerBar = document.getElementById('timer');
const messageAndImageHolder = document.getElementById('message-and-image-holder');
let username;

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
    let infoSection = document.getElementById('info-section');
    let home = document.getElementById('home');
    let contactSection = document.getElementById('contact-section')
    if (elementId === 'home-link' || elementId === 'toggle-home-link') {
        infoSection.classList.add('hidden');
        contactSection.classList.add('hidden');
        home.classList.remove('hidden');
    } else if (elementId === 'rules-link' || elementId === 'toggle-rules-link') {
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
  let difficultyLevel = document.getElementById('difficulty-level');
  difficultyLevel.classList.remove('hidden');
  startSection.classList.add('hidden');
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
      "correctAnswer" : "c",
      "difficulty": 'easy'
    },{
      "question" : 'How often is the FIFA World Cup?',
      "answerA"  : 'Every 10 years',
      "answerB"  : 'Every 5 years',
      "answerC"  : 'Every 2 years',
      "answerD"  : 'Every 4 years',
      "correctAnswer" : "d",
      "difficulty": 'easy'
    },{
      "question" : 'How long is a standard football game?',
      "answerA"  : '45 min',
      "answerB"  : '120 min',
      "answerC"  : '90 min',
      "answerD"  : '100 min',
      "correctAnswer" : "c",
      "difficulty": 'easy'
    },{
      "question" : 'If there is a clean sheet, how many goals were scored?',
      "answerA"  : '0',
      "answerB"  : 'Less than 10',
      "answerC"  : '1',
      "answerD"  : 'Less than 5',
      "correctAnswer" : "a",
      "difficulty": 'easy'
    },{
      "question" : 'How many players make a football team?',
      "answerA"  : '7',
      "answerB"  : '11',
      "answerC"  : '22',
      "answerD"  : '9',
      "correctAnswer" : "b",
      "difficulty": 'easy'
    },{
      "question" : 'Which of the following is not a football team in England?',
      "answerA"  : 'Chelsea FC',
      "answerB"  : 'Tottenham Hotspur FC',
      "answerC"  : 'Everton FC',
      "answerD"  : 'New England Revolution',
      "correctAnswer" : "d",
      "difficulty": 'easy'
    },{
      "question" : 'What are the two primary football teams in Manchester, England?',
      "answerA"  : 'FC Barcelona and Real Madrid',
      "answerB"  : 'Milan and Inter',
      "answerC"  : 'Man United and Man City',
      "answerD"  : 'Bayern Munich and Borussia Dortmund',
      "correctAnswer" : "c",
      "difficulty": 'easy'
    },{
      "question" : 'what is the most watched football competition?',
      "answerA"  : 'World Cup',
      "answerB"  : 'Champions League',
      "answerC"  : 'Premier league',
      "answerD"  : 'Europa League',
      "correctAnswer" : "a",
      "difficulty": 'easy'
    },{
      "question" : 'Which country is Ronaldo from?',
      "answerA"  : 'Argentina',
      "answerB"  : 'Brazil',
      "answerC"  : 'England',
      "answerD"  : 'Portugal',
      "correctAnswer" : "d",
      "difficulty": 'easy'
    },{
      "question" : 'What is the standard size of a football pitch?',
      "answerA"  : '125 m x 85 m',
      "answerB"  : '155 m x 95 m',
      "answerC"  : '175 m x 105 m',
      "answerD"  : '195 m x 110 m',
      "correctAnswer" : "a",
      "difficulty": 'easy'
    },
    {
      "question" : 'When was the first Premier League match played?',
      "answerA"  : '1992/93',
      "answerB"  : '1991/92',
      "answerC"  : '1994/95',
      "answerD"  : '1996/94',
      "correctAnswer" : "a",
      "difficulty": 'medium'
    },
    {
      "question" : 'Which player scored the fastest hattrick in the premier League?',
      "answerA"  : 'Wayen Ronney',
      "answerB"  : 'Sergio Augero',
      "answerC"  : 'Sadio Mane',
      "answerD"  : 'Harry Kane',
      "correctAnswer" : "c",
      "difficulty": 'medium'
    },
    {
      "question" : "Which is the world's largest football stadium?",
      "answerA"  : 'Camp Nou',
      "answerB"  : 'Wembley Stadium',
      "answerC"  : 'FNB Stadium',
      "answerD"  : 'Rungrado 1st of May Stadium',
      "correctAnswer" : "d",
      "difficulty": 'medium'
    },
    {
      "question" : 'Which country won the first World Cup Championship?',
      "answerA"  : 'Brazil',
      "answerB"  : 'Italy',
      "answerC"  : 'Uruguay',
      "answerD"  : 'England',
      "correctAnswer" : "c",
      "difficulty": 'medium'
    },
    {
      "question" : 'This Barcelona player was jailed after it was found that his passport was fake',
      "answerA"  : 'Messi',
      "answerB"  : 'Ronaldinho',
      "answerC"  : "Samuel Eto'o",
      "answerD"  : 'Iniesta',
      "correctAnswer" : "b",
      "difficulty": 'medium'
    },
    {
      "question" : 'What was the name of the first football club founded?',
      "answerA"  : 'Sheffield FC',
      "answerB"  : 'Stoke City',
      "answerC"  : 'Queens Park',
      "answerD"  : 'Wrexham',
      "correctAnswer" : "a",
      "difficulty": 'hard'
    },
    {
      "question" : 'Who is the top goal scorer of the Champions League?',
      "answerA"  : 'Karim Benzema',
      "answerB"  : 'Lionel Messi',
      "answerC"  : 'Robert Lewanoski',
      "answerD"  : 'Cristiano Ronaldo',
      "correctAnswer" : "d",
      "difficulty": 'medium'
    },
    {
      "question" : 'Which club has won the most Champions League titles?',
      "answerA"  : 'Milan',
      "answerB"  : 'Real Madrid',
      "answerC"  : 'Barcelona',
      "answerD"  : 'Man United',
      "correctAnswer" : "b",
      "difficulty": 'medium'
    },
    {
      "question" : 'After how many games did Cirstiano Ronaldo score his first Champions League goal?',
      "answerA"  : '5',
      "answerB"  : '2',
      "answerC"  : '15',
      "answerD"  : '27',
      "correctAnswer" : "d",
      "difficulty": 'medium'
    },
    {
      "question" : 'Which football club did Wayne Ronney score his first goal against?',
      "answerA"  : 'Everton',
      "answerB"  : 'Arsenal',
      "answerC"  : 'Tottenham',
      "answerD"  : 'Man City',
      "correctAnswer" : "b",
      "difficulty": 'medium'
    },
    {
      "question" : 'With 365 goals, who holds the record for top Bundesliga goalscorer of all time?',
      "answerA"  : 'Robert Lewandowski',
      "answerB"  : 'Klaus Fischer',
      "answerC"  : 'Gerd M??ller',
      "answerD"  : 'Dieter M??ller',
      "correctAnswer" : "c",
      "difficulty": 'hard'
    }, 
    {
      "question" : 'After Juventus, AC Milan and Inter, with nine Scudettos, which team has won the most Serie A titles?',
      "answerA"  : 'Torino',
      "answerB"  : 'Pro Vercelli',
      "answerC"  : 'Bologna',
      "answerD"  : 'Genoa',
      "correctAnswer" : "d",
      "difficulty": 'hard'
    },
    {
      "question" : 'Which MLS franchise team does David Beckham own?',
      "answerA"  : 'Toronto FC',
      "answerB"  : 'Inter Miami CF',
      "answerC"  : 'LA Galaxy',
      "answerD"  : 'FC Dallas',
      "correctAnswer" : "b",
      "difficulty": 'hard'
    },
    {
      "question" : "Messi has won a record number of Ballon d'Or awards - how many?",
      "answerA"  : '4',
      "answerB"  : '3',
      "answerC"  : '7',
      "answerD"  : '5',
      "correctAnswer" : "c",
      "difficulty": 'medium'
    },
    {
      "question" : 'Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid',
      "answerA"  : '9',
      "answerB"  : '27',
      "answerC"  : '19',
      "answerD"  : '11',
      "correctAnswer" : "a",
      "difficulty": 'hard'
    },
    {
      "question" : "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
      "answerA"  : 'Spain 1982',
      "answerB"  : 'Mexico 1986',
      "answerC"  : 'Italy 1990',
      "answerD"  : 'United States 1994',
      "correctAnswer" : "b",
      "difficulty": 'hard'
    },
    {
      "question" : 'The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?',
      "answerA"  : 'Christian Eriksen',
      "answerB"  : 'Asmir Begovic',
      "answerC"  : 'Shane Long',
      "answerD"  : 'Alan Shearer',
      "correctAnswer" : "c",
      "difficulty": 'hard'
    },
    {
      "question" : "Who was Jose Mourinho's first signing at Chelsea?",
      "answerA"  : 'Scott Sinclair',
      "answerB"  : 'Arjen Robben',
      "answerC"  : 'Didier Drogba',
      "answerD"  : 'Paulo Ferreira',
      "correctAnswer" : "d",
      "difficulty": 'hard'
    },
    {
      "question" : 'How much did Sporting Lisbon receive for the transfer of 17 years old, Cristiano Ronaldo?',
      "answerA"  : '??10 million',
      "answerB"  : '??12 million',
      "answerC"  : '??5 million',
      "answerD"  : '??20 million',
      "correctAnswer" : "b",
      "difficulty": 'hard'
    },
    {
      "question" : "Which Ballon d'Or-winning footballer had a galaxy named after them in 2015?",
      "answerA"  : 'Lionel Messi',
      "answerB"  : 'Kaka',
      "answerC"  : 'Ronaldinho',
      "answerD"  : 'Cristiano Ronaldo',
      "correctAnswer" : "d",
      "difficulty": 'hard'
    }
  ];

  function checkDifficultyLevel(event) {
    selectedDiffulty = String(event.target.id);
    newData = questions.filter(question => {
      return question.difficulty === selectedDiffulty;
    });
  
    lastQuestion = newData.length - 1;
  
    let startSection = document.getElementById('start-page');
    let quizSection = document.getElementById('quiz-section');
    let restartSection = document.getElementById('restart');
    let difficultyLevel = document.getElementById('difficulty-level');
    difficultyLevel.classList.add('hidden');
    restartSection.classList.add('hidden');
    startSection.classList.add('hidden');
    suffle(newData);
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    resetProgressCircles();
    displayQuestion ();
    quizSection.classList.remove('hidden');
    updateQuestionNumber();
    startTimer();
    currentTime = 0;
  
  }
  
  let newData;
  let selectedDiffulty;
  
  let lastQuestion;
  let currentQuestionIndex = 0; 

function displayQuestion() {
    theQuestion.innerHTML = newData[currentQuestionIndex].question;

    const {answerA, answerB, answerC, answerD} = newData[currentQuestionIndex]
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
    if(choice === newData[currentQuestionIndex].correctAnswer) {
        score += 10;
        event.target.classList.add('answer-right');
        for (let button of buttons) {
          if(button.id !== newData[currentQuestionIndex].correctAnswer) {
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
  progressCircles[currentQuestionIndex].innerHTML = `<i class="fa-regular fa-futbol" style="color: red;"></i>`;
}

function displayProgressRight() {
  let progressCircles = document.getElementsByClassName('progress-circle');
  progressCircles[currentQuestionIndex].innerHTML = `<i class="fa-regular fa-futbol" style="color: green;"></i>`;
}

function resetProgressCircles() {
  let progressCircles = document.getElementsByClassName('progress-circle');
  for(let cricle of progressCircles) {
    cricle.innerHTML = ``
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
  questionNumber.innerHTML = `${currentQuestionIndex + 1} / ${newData.length}`;
}

function updateScore() {
  let scoreSpan = document.getElementById('score');
  scoreSpan.innerHTML = `${score}`;
}

//Show the overall score based on the answers
function showOverAllScore() {
  let result = Math.round(10 * (score / newData.length));
  messageAndImageHolder.innerHTML = 
  (result >= 100) ? // when the user answers 100% right
  `
  <p id="overall-score-message">Congratulations <span class="score-name">${username}!</span> You have won the World Cup</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/world-cup-trophy.jpg" alt="World Cup trophy">
  </div>
  `:
  (result >= 80) ? // when the user answers above 80% right
  `
  <p id="overall-score-message">Congratulations <span class="score-name">${username}!</span> You have won the Champions League</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/champions-league-trophy.jpg" alt="champions league trophy">
  </div>
  `:
  (result >= 60) ? // when the user answers above 60% right
  `
  <p id="overall-score-message">Congratulations <span class="score-name">${username}!</span> You have won the Europa League</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/europa-league-trophy-removebg-preview.jpg" alt="World Cup trophy">
  </div>
  `:
  (result >= 40) ?  // when the user answers above 40% right
  `
  <p id="overall-score-message">Congratulations <span class="score-name">${username}!</span> You have won the Premier League</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/premier-league-trophy.jpg" alt="World Cup trophy">
  </div>
  `: 
  (result >= 20) ? // when the user answers above 20% right
  `
  <p id="overall-score-message">Congratulations <span class="score-name">${username}!</span> You have won the Conference League</p>
  <div class="image-holder" id="image-holder">
      <img src="./assets/images/conference-league-trophy.jpg" alt="World Cup trophy">
  </div>
  `: // when the user answer under 20% right
  `
  <p id="overall-score-message">You didn't win any trophies this time <span class="score-name">${username}:( </span> Better luck next time!</p>
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