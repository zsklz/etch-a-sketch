// generate the 16x16 grid (with flexbox css)
const container = document.querySelector('#app');
for (let i = 0; i < 16; ++i) {
    const row = document.createElement('div');
    row.classList.toggle('row');
    for (let j = 0; j < 16; ++j) {
	const gridSquare = document.createElement('div');
	gridSquare.classList.toggle('gridsquare');
	row.appendChild(gridSquare);
    }
    container.appendChild(row);
}
