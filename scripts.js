// Variables
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const grid_container = document.querySelector('.grid-container');

let color_btn = document.querySelector('#color-btn');
let rainbow_btn = document.querySelector('#rainbow-btn');
let erase_btn = document.querySelector('#erase-btn');
let clear_btn = document.querySelector('#clear-btn');
let toggle_grid = document.querySelector('#toggle-grid');

let toggle_grid_active = false;



let btn = document.querySelectorAll('.btn');

let size_slider = document.querySelector('#size-slider');

let display_size = document.querySelector('#display-size');



// Function to generate random colors
function generateRanColor() {
  let hexColorCode = '#';

  for (i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * 15);
    hexColorCode += hexCharacters[n]; 
  }
  return hexColorCode;
}



// Generates a grid of square divs
function generateDivs(size) {
  for (i = 0; i < (size * size); i++) { // Get user input for the size
    let div1 = document.createElement('div');
    div1.classList.add('grid-div');
    let grid_div = document.querySelector('.grid-div');
    div1.style.width = ((600) / (size) - 2).toString() + "px"; // Take container (length) / (user input size) - 2px (border size for each divs)
    div1.style.height = ((600) / (size) - 2).toString() + "px";

    if (toggle_grid_active == true) {
      div1.style.background = 'white';
      div1.style.border = '1px solid white';     
    } else {
      div1.style.background = 'white';
      div1.style.border = '1px solid grey';
    }
      
    grid_container.appendChild(div1);
  }
  
  if (color_btn.classList.contains("btnSpecial")) {
    colorCells();
  } else if (erase_btn.classList.contains("btnSpecial")) {
    eraseCells();
  } else if (rainbow_btn.classList.contains("btnSpecial")) {
    rainbowCells();
  }
}



// Update the current slider value (each time you drag the slider handle)
size_slider.oninput = function() {
  sliderFunc();
}

function sliderFunc() {
  display_size.textContent = size_slider.value + " x " + size_slider.value;
  return size_slider.value;
}
//
// Call function on website loaded
generateDivs(sliderFunc());
// Call function when slider value is changed
size_slider.addEventListener('mouseup', (e) => {
  let div1 = document.querySelectorAll('.grid-div');

  div1.forEach(element => {
    element.remove();
  });
  generateDivs(sliderFunc());
});


// Change color and background color of button when clicked event

btn.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.btnSpecial')?.classList.remove('btnSpecial');
    button.classList.add('btnSpecial');
  });
});










// All button events and functions

color_btn.addEventListener('click', (e) => {
  colorCells();
});


erase_btn.addEventListener('click', (e) => {
  eraseCells();
});

clear_btn.addEventListener('click', (e) => {
  let allDivs = document.querySelectorAll('.grid-div');
  allDivs.forEach(div => {
    if (toggle_grid_active == true) {
      div.style.background = 'white';
      div.style.border = '1px solid white';     
    } else {
      div.style.background = 'white';
      div.style.border = '1px solid grey';
    }
  })
});

rainbow_btn.addEventListener('click', (e) => {
  rainbowCells();
});


toggle_grid.addEventListener('click', (e) => {
  toggleGrid();
});













// Change color of divs when hovering over divs while holding down mouse button
function colorCells() {
  disableDrag();
  let div1 = document.querySelectorAll('.grid-div');

  div1.forEach(div => {
    div.addEventListener('mouseover', (e) => {
      if (e.buttons === 1) {
        e.target.style.background = 'black';

        if (toggle_grid_active == false) {
          e.target.style.border = div.style.border;
        }
        else if (toggle_grid_active == true) {
          e.target.style.border = '1px solid black';          
        }
      }
    });

    div.addEventListener('mousedown', (e) => {
      e.target.style.background = 'black';
      
      if (toggle_grid_active == false) {
        e.target.style.border = div.style.border;
      }
      else if (toggle_grid_active == true) {
        e.target.style.border = '1px solid black';          
      }
    });
  });
}

// Erase function
function eraseCells() {
  disableDrag();
  let div1 = document.querySelectorAll('.grid-div');

  div1.forEach(div => {
    div.addEventListener('mouseover', (e) => {
      if (e.buttons === 1) {
        e.target.style.background = 'white';
        
        if (toggle_grid_active == false) {
          e.target.style.border = div.style.border;
        }
        else if (toggle_grid_active == true) {
          e.target.style.border = '1px solid white';          
        }
      }
    });
    
    div.addEventListener('mousedown', (e) => {
      e.target.style.background = 'white';
      
      if (toggle_grid_active == false) {
        e.target.style.border = div.style.border;
      }
      else if (toggle_grid_active == true) {
        e.target.style.border = '1px solid white';          
      }
    });
  });
}

// Function rainbow color
function rainbowCells() {
  disableDrag();
  let div1 = document.querySelectorAll('.grid-div');

  div1.forEach(div => {
    div.addEventListener('mouseover', (e) => {
      let rainbow = generateRanColor().toString();

      if (e.buttons === 1) {
        e.target.style.background = rainbow;

        if (toggle_grid_active == false) {
          e.target.style.border = div.style.border;
        }
        else if (toggle_grid_active == true) {
          e.target.style.border = '1px solid ' + rainbow;          
        }
      }
    });

    div.addEventListener('mousedown', (e) => {
      let rainbow = generateRanColor().toString();

      e.target.style.background = rainbow;
      
      if (toggle_grid_active == false) {
        e.target.style.border = div.style.border;
      }
      else if (toggle_grid_active == true) {
        e.target.style.border = '1px solid ' + rainbow;          
      }
    });
  });
}






// Toggle grid function
function toggleGrid() {
  let allDivs = document.querySelectorAll('.grid-div');

  // Switch to grid-less
  if (toggle_grid_active == false) {
    toggle_grid_active = true;

    allDivs.forEach(div => {
      div.style.border = '1px solid ' + div.style.background;
    });
  } 
  // Switch back to grid
  else if (toggle_grid_active == true) {
    toggle_grid_active = false;

    allDivs.forEach(div => {
      div.style.border = '1px solid grey';
    });
  }
}

// Function to check toggle grid









































// Disable dragging divs (VERY IMPORTANT)
function disableDrag() {
  let div1 = document.querySelectorAll('.grid-div');

div1.forEach(div => {
  div.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
  div.addEventListener('drag', (e) => {
    e.preventDefault();
  });
});
}
disableDrag();

// Testing on event load event
window.addEventListener("load", (e) => {
  colorCells();
  color_btn.classList.add('btnSpecial');
});