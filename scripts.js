// Variables
const grid_container = document.querySelector('.grid-container');

let color_btned = false;

let size_slider = document.querySelector('#size-slider');

let display_size = document.querySelector('#display-size');



// Generates a grid of square divs
function generateDivs(size) {
  for (i = 0; i < (size * size); i++) { // Get user input for the size
    let div1 = document.createElement('div');
    div1.classList.add('grid-div');
    let grid_div = document.querySelector('.grid-div');
    div1.style.width = (Math.sqrt((600 * 600) / (size * size)) - 2).toString() + "px"; // Take container (width * height) / (user input size squared) - 2px (border size for each divs)
    div1.style.height = (Math.sqrt((600 * 600) / (size * size)) - 2).toString() + "px";
    div1.style.background = 'yellow';
    div1.style.border = '1px solid white';
      
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
// Call function
generateDivs(sliderFunc());




// Change color of divs when hovering over divs while holding down mouse button
let div1 = document.querySelectorAll('.grid-div');
//
if (color_btned == true) {
  div1.forEach(div => {
    div.addEventListener('mouseover', (e) => {
      if (e.buttons === 1) {
        e.target.style.background = 'black';
        e.target.style.border = 'black';
      }
    });
  
    div.addEventListener('mousedown', (e) => {
      e.target.style.background = 'black';
      e.target.style.border = 'black';
    })
  
  });
}






















// Disable dragging divs (VERY IMPORTANT)
div1.forEach(div => {
  div.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
  div.addEventListener('drag', (e) => {
    e.preventDefault();
  });
});