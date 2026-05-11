// Menu handler
import { GRID_SIZE_INPUT_CLASS, RESET_BUTTON_CLASS, DEFAULT_GRID_SIZE } from "./config.js"
import { resizeGrid } from "./grid.js";

/**
 * Reset workspace grid size base on user input field
*/
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

/**
 * Reset workspace grid base on user input
*/
function resetGrid() {
    const resetButton = document.querySelector(`.${RESET_BUTTON_CLASS}`);
    const input = document.querySelector(`.${GRID_SIZE_INPUT_CLASS}`);
    resetButton.addEventListener('click', (e) => {
        resizeGrid(DEFAULT_GRID_SIZE.nRows, DEFAULT_GRID_SIZE.nCols);
        input.value = DEFAULT_GRID_SIZE.nRows;
    });
}
export { resetGrid, initGridSizeInput };