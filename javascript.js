const container = document.getElementById("container");
let gridValue = 16;

function createGrid() {
  for (let i = 0; i < gridValue ** 2; i++) {
      let div = document.createElement('div');
      container.append(div);
  }

  const squares = document.querySelectorAll('div#container > div');

  squares.forEach(square => square.addEventListener('mouseenter', (e) => {
  square.classList.add('color');
}));
}

createGrid();

function resize() {
  gridValue = parseInt(prompt('Select grid dimension up to 100'));
  container.style.height = '650px';
  value = `repeat(${gridValue}, ${640 / gridValue})`;
  container.setAttribute('style', `grid-template-rows: repeat(${gridValue}, ${640 / gridValue}px); grid-template-columns: repeat(${gridValue}, ${640 / gridValue}px);`);
  createGrid();
}