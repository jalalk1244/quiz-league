// All the constansts
const startButton = document.getElementById('start-button');

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
    quizSection.classList.remove('hidden');
   }

  startButton.addEventListener('click', startGame);