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
            let width = 1000 / num;
            pixel.classList.add('pixel');
            pixel.id = `${i}x${j}`;
            pixel.style.cssText += `width: ${width}px; height: ${width}px`;
            pixel.addEventListener('mouseover', changeColor);
            row.appendChild(pixel);
        }
        canvas.appendChild(row); //add row container to grid
    }
}

//removes all child elements of parent container
function wipeGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function eraseGrid() {
    canvas.forEach(pixel => pixel.style.cssText += 'background-color: white');
}
//change color of pixel when moused over
function changeColor(e) {
    e.target.style.cssText += 'background-color: black';
}
const createBtn = document.querySelector('.create-grid');
const clearBtn = document.querySelector('.clear-grid');

createBtn.addEventListener('click', createGrid);
clearBtn.addEventListener('click', wipeGrid);