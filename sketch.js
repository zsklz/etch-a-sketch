const DEFAULT_SIZE = 16;

function generateGrid(size) {
    const container = document.querySelector('#app');
    for (let i = 0; i < size; ++i) {
	const row = document.createElement('div');
	row.classList.toggle('row');
	for (let j = 0; j < size; ++j) {
	    const gridSquare = document.createElement('div');
	    gridSquare.classList.toggle('gridsquare');
	    gridSquare.setAttribute('draggable', 'false');
	    gridSquare.setAttribute('ondragstart', 'return false');
	    gridSquare.addEventListener('mouseover', colorSquare);
	    gridSquare.addEventListener('mousedown', colorSquare);
	    row.appendChild(gridSquare);
	}
	container.appendChild(row);
    }
}

function clearGrid() {
    const container = document.querySelector('#app');
    while (container.firstChild) {
	container.removeChild(container.lastChild);
    }
}

function colorSquare(event) {
    // only color if leftclick is pressed
    if (event.buttons === 1) {
	event.target.style.background = 'black';
    }
}

function setSize() {
    const size = prompt("Set the size of the grid (max 100)");
    if (size > 100 || isNaN(size)) return;
    clearGrid();
    generateGrid(size);
}

const sizeBtn = document.querySelector('#size-btn');
sizeBtn.addEventListener('click', setSize);

generateGrid(DEFAULT_SIZE);

