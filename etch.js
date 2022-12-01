const gridRes = 1024;
let gridSize = 16;

const cellColors = {};

let mouseDown = false;
let selectedColor = "black";

window.onload = function() {
    console.log("loaded");
    const button = document.querySelector(".btn-grid-size");
    button.addEventListener("click", buttonPress);
    window.addEventListener('mousedown', () => { mouseDown = true; });
    window.addEventListener('mouseup', () => { mouseDown = false; });

    buildGrid();
};

function buttonPress() {    
    gridSize = prompt("enter grid size");
    buildGrid();    
}

function onMouseEnter() {
    this.style.backgroundColor = "black";
    if (mouseDown) {
        cellColors[this.getAttribute('id')] = selectedColor;
    }
}

function onMouseLeave() {
    this.style.backgroundColor = cellColors[this.getAttribute('id')];
}

function onMouseDown() {
    mouseDown = true;
    cellColors[this.getAttribute('id')] = selectedColor;
}

function buildGrid() {
    const main = document.querySelector(".main-grid");
    main.innerHTML = "";
    main.style.gridTemplateColumns = `repeat(${gridSize},${gridRes / gridSize}px)`;
    main.style.gridTemplateRows = `repeat(${gridSize},${gridRes / gridSize}px)`;
    

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const newCell = document.createElement("div");
            newCell.classList.add('cell');
            let id = i + "," + j;
            newCell.setAttribute('id', id);

            delete cellColors[id];
            cellColors[id] = "white";

            newCell.addEventListener('mouseenter', onMouseEnter);
            newCell.addEventListener('mouseleave', onMouseLeave);
            newCell.addEventListener('mousedown', onMouseDown);
            main.appendChild(newCell);
        }
    }
}