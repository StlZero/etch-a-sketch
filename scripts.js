// Variables
const grid_container = document.querySelector('.grid-container');



// Generates a grid of square divs
for (i = 0; i < 100; i++) {
  let div1 = document.createElement('div');
  div1.classList.add('grid-div');
  div1.setAttribute('draggable', 'false');
    
  grid_container.appendChild(div1);
}

// grid_container.addEventListener('click', (e) => {
//   e.target.style.background = 'blue';
// });


let div1 = document.querySelectorAll('.grid-div');


// Change color of divs when hovering over divs while holding down mouse button
div1.forEach(div => {
  div.addEventListener('mouseover', (e) => {
    if (e.buttons === 1) {
      e.target.style.background = 'blue';
    }
  });

  div.addEventListener('mousedown', (e) => {
    e.target.style.background = 'blue';
  })

});



// Disable dragging divs
div1.forEach(div => {
  div.addEventListener('dragstart', (e) => {
    e.preventDefault();

  });
});





