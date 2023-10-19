// Variables
const grid_container = document.querySelector('.grid-container');

let div1 = document.querySelectorAll('.grid-div');

let color_btned = false;




// Generates a grid of square divs
function generateDivs() {
  for (i = 0; i < (60 * 60); i++) {
    let div1 = document.createElement('div');
    div1.classList.add('grid-div');
    let grid_div = document.querySelector('.grid-div');
    div1.style.width = '10px';
    div1.style.height = '10px';
    div1.style.background = 'yellow';
    div1.style.border = '1px solid white';
      
    grid_container.appendChild(div1);
  }
}
//
// Call function
generateDivs();


// Change color of divs when hovering over divs while holding down mouse button
if (color_btned == true) {
  div1.forEach(div => {
    div.addEventListener('mouseover', (e) => {
      if (e.buttons === 1) {
        e.target.style.background = 'black';
      }
    });
  
    div.addEventListener('mousedown', (e) => {
      e.target.style.background = 'black';
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