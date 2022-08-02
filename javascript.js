// Establish DOM container object and set initial grid value
const container = document.getElementById("container");
let gridValue = 16;

function createGrid() {
  // Add squares to container
  for (let i = 0; i < gridValue ** 2; i++) {
      let div = document.createElement('div');
      container.append(div);
  }

  // Add color to squares when hovered over
  const squares = document.querySelectorAll('div#container > div');
  squares.forEach(square => square.addEventListener('mouseenter', (e) => {
  square.classList.add('color');
}));
}

createGrid();

function resize() {
  // Prompt for new grid value 1 - 100
  gridValue = parseInt(prompt('Select grid dimension up to 100'));
  while (gridValue < 1 || gridValue > 100) {
    gridValue = parseInt(prompt('Select grid dimension up to 100'));
  }

  // Modify size of squares and reset grid to white
  const squares = document.querySelectorAll('div#container > div');
  container.setAttribute('style', `grid-template-rows: repeat(${gridValue}, ${640 / gridValue}px); grid-template-columns: repeat(${gridValue}, ${640 / gridValue}px);`);
  squares.forEach(square => square.classList.remove('color'));
  createGrid();
}