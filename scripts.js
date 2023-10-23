// Variables
const grid_container = document.querySelector('.grid-container');

let color_btn = document.querySelector('#color-btn');
let rainbow_btn = document.querySelector('#rainbow-btn');
let erase_btn = document.querySelector('#erase-btn');
let clear_btn = document.querySelector('#clear-btn');
let toggle_grid = document.querySelector('#toggle-grid');



let size_slider = document.querySelector('#size-slider');

let display_size = document.querySelector('#display-size');



// Generates a grid of square divs
function generateDivs(size) {
  for (i = 0; i < (size * size); i++) { // Get user input for the size
    let div1 = document.createElement('div');
    div1.classList.add('grid-div');
    let grid_div = document.querySelector('.grid-div');
    div1.style.width = ((600) / (size) - 2).toString() + "px"; // Take container (length) / (user input size) - 2px (border size for each divs)
    div1.style.height = ((600) / (size) - 2).toString() + "px";
    div1.style.background = 'white';
    div1.style.border = '1px solid grey';
      
    grid_container.appendChild(div1);
  }
}



// Update the current slider value (each time you drag the slider handle)
size_slider.oninput = function() {
  sliderFunc();
};

function sliderFunc() {
  display_size.textContent = size_slider.value;
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
  })
  generateDivs(sliderFunc());
})

// All button events and functions

color_btn.addEventListener('click', (e) => {
  colorCells();
})


erase_btn.addEventListener('click', (e) => {
  eraseCells();
})













// Change color of divs when hovering over divs while holding down mouse button
function colorCells() {
  disableDrag();
  let div1 = document.querySelectorAll('.grid-div');

  div1.forEach(div => {
    div.addEventListener('mouseover', (e) => {
      if (e.buttons === 1) {
        e.target.style.background = 'black';
        e.target.style.border = '1px solid grey';
      }
    });
    
    div.addEventListener('mousedown', (e) => {
      e.target.style.background = 'black';
      e.target.style.border = '1px solid grey';
    })
    
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
        e.target.style.border = '1px solid grey';
      }
    });
    
    div.addEventListener('mousedown', (e) => {
      e.target.style.background = 'white';
      e.target.style.border = '1px solid grey';
    })
    
  });
}




































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