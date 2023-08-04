// generate the 16x16 grid (with flexbox css)
const container = document.querySelector('#app');
for (let i = 0; i < 16; ++i) {
    const row = document.createElement('div');
    row.classList.toggle('row');
    for (let j = 0; j < 16; ++j) {
	const gridSquare = document.createElement('div');
	gridSquare.classList.toggle('gridsquare');
	gridSquare.addEventListener('mouseover', colorSquare);
	gridSquare.addEventListener('mousedown', colorSquare);
	row.appendChild(gridSquare);
    }
    container.appendChild(row);
}

function colorSquare(event) {
    // only color if leftclick is pressed
    if (event.buttons === 1) {
	event.target.style.background = 'black';
    }
}

