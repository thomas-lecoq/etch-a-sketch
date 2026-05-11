// Drawing logic on the grid

import { WORKSPACE_CONTAINER_CLASS, GRID_COL_CLASS, GRID_CELL_COLOR_CLASS} from "./config.js";

/**
 * Draw on workspace grid base on mouseover event
*/
function drawOnGrid() {
    const workspaceGrid = document.querySelector(`.${WORKSPACE_CONTAINER_CLASS}`);
    workspaceGrid.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains(GRID_COL_CLASS)) {
            e.target.classList.add(GRID_CELL_COLOR_CLASS);
        }
    })
}

export { drawOnGrid };