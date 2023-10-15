// Variables
const grid_container = document.querySelector('.grid-container');


// Generates square divs
function generateDiv() {
  let div1 = document.createElement('div');
  div1.classList.add('grid-div');
    
  grid_container.appendChild(div1);
}


// Generates a grid of square divs
function generateGrid() {
  
  for (i = 0; i < 100; i++) {
    generateDiv();
  }
}

generateGrid();


// Event on click -> changes color

