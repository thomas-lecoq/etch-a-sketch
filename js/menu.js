// Menu handler
import { GRID_SIZE_INPUT_CLASS } from "./config.js"
import { resizeGrid } from "./grid.js";

// Grid size change (event = change)
function initGridSizeInput() {
    const input = document.querySelector(`.${GRID_SIZE_INPUT_CLASS}`);

    // listen to user pressing 'Enter' key:
    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const inputValue = event.target.value;
            const newGridSize = parseInt(inputValue, 10);

            // control input quality
            const alertText = 'Please set a grid size between 1 and 100'; 
            switch(true) {
                case (Number.isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100):
                    alert(alertText);
                    return;
                default:
                    resizeGrid(newGridSize, newGridSize);
            };
        }
    });
}

// Grid reset button

export { initGridSizeInput };