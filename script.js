const canvas = document.querySelector('.container');
//create n containers as rows with n items 

function createGrid() {
    wipeGrid(canvas); //removes old grid
    const num = prompt('How big would you like your canvas?', '');
    for (i = 0; i < num; i++) { //create num divs and flex container rows
        let row = document.createElement('div');
        row.classList.add('container', 'row');
        for (j = 0; j < num; j++) { //create num divs in each flex row
            let pixel = document.createElement('div');
            let width = 500 / num;
            pixel.classList.add('pixel');
            pixel.style.cssText += `width: ${width}px; height: ${width}px`;
            row.appendChild(pixel);
        }
        canvas.appendChild(row); //add row container to grid
    }
}


//removes all child elements of parent container
function wipeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const createBtn = document.querySelector('.create-grid');
createBtn.addEventListener('click', createGrid);