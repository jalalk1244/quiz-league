// Open the menu when the toggle button is clicked
function openMenu(){
    let navListContainer = document.getElementsByClassName('toggle-nav-list-container')[0];

    if (navListContainer.style.display === "none") {
        navListContainer.style.display = "block";
      } else {
        navListContainer.style.display = "none";
      }
  }