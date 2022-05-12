const canvas = document.querySelector('.container');
//create n containers as rows with n items 

function createGrid() {
    wipeGrid(canvas);
    const num = prompt('How big would you like your canvas?', '');
    for (i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.classList.add('container', 'row');
        for (j = 0; j < num; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.textContent = 'blah';
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

function wipeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const createBtn = document.querySelector('.create-grid');
createBtn.addEventListener('click', createGrid);