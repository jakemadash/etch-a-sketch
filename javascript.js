const container = document.getElementById("container");
let gridValue = 16;

for (let i = 0; i < gridValue ** 2; i++) {
    let div = document.createElement('div');
    container.append(div);
}

const squares = document.querySelectorAll('div#container > div');

squares.forEach(square => square.addEventListener('mouseenter', (e) => {
  square.classList.add('color');
}));