const gridRes = 1024;
let gridSize = 3;

window.onload = function() {
    console.log("loaded");
    const button = document.querySelector(".btn-grid-size");
    button.addEventListener("click", buttonPress);

    const main = document.querySelector(".main-grid");
    main.innerHTML = "";
    main.style.gridTemplateColumns = `repeat(${gridSize},${gridRes / gridSize}px)`;
    main.style.gridTemplateRows = `repeat(${gridSize},${gridRes / gridSize}px)`;
};

function buttonPress() {    
    gridSize = prompt("enter grid size");

    const main = document.querySelector(".main-grid");
    main.innerHTML = "";
    main.style.gridTemplateColumns = `repeat(${gridSize},${gridRes / gridSize}px)`;
    main.style.gridTemplateRows = `repeat(${gridSize},${gridRes / gridSize}px)`;
    

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const newCell = document.createElement("div");
            newCell.classList.add('cell');
            main.appendChild(newCell);
        }
    }
    

}