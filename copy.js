const container = document.getElementById("container");
let gridValue = 16;
const style = document.styleSheets[0];
let divRules;
for (let i = 0; i < style.cssRules.length; i++) {
    if(stylesheet.cssRules[i].selectorText === '.div') {
      divRules= stylesheet.cssRules[i];
    }
  }
divRules.style.setProperty('height', 960 / gridValue);
divRules.style.setProperty('width', 960 / gridValue);
for (let i = 0; i < gridValue; i++) {
    for (let j = 0; j < gridValue; j++) {
        let div = document.createElement('div');
        container.append(div);
        div = container.lastChild;
        div.classList.add('div');
    }
    let div = document.createElement('div');
    container.append(div);
    div = container.lastChild;
    div.classList.add('div');
}