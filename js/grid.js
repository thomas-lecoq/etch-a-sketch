// Creation and manipulation of the grid

import { WORKSPACE_CONTAINER_CLASS, WORKSPACE_UI_CLASS, WORKSPACE_GRID_CLASS, DEFAULT_GRID_SIZE} from './config.js';
import { appendNewElement } from './utils.js';

/**
 * Create new h2 title, append it to workspace-ui
 * @param {HTMLElement} workspaceUi - workspaceUi element
 * @param {string} text - title name  
 * @returns {HTMLElement} newly created h2 title element
*/
function appendWorkspaceTitle(workspaceUi, text) {
    const title = appendNewElement('h2', 'workspace-title', workspaceUi);
    title.textContent = text;
    
    return title;
}

/**
 * Init workspace-ui, attach it to workspace-container
 * @returns {HTMLElement} workspaceUi element
*/
function createWorkspaceUi() {
    const workspaceContainer = document.querySelector(`.${WORKSPACE_CONTAINER_CLASS}`);
    const workspaceUi = appendNewElement('div', WORKSPACE_UI_CLASS, workspaceContainer);
    appendWorkspaceTitle(workspaceUi, 'Draw here !');

    return workspaceUi;
}

/**
 * Create workspace grid, append it to workspace-ui
 * @param {number} [numberOfRows=DEFAULT_GRID_SIZE.nRows] - number of rows of the grid
 * @param {number} [numberOfCols=DEFAULT_GRID_SIZE.nCols] - number of columns of the grid
 * @param {HTMLElement} [workspaceUi=createWorkspaceUi()] - workspaceUi element
*/
function createGrid(
    numberOfRows=DEFAULT_GRID_SIZE.nRows, 
    numberOfCols=DEFAULT_GRID_SIZE.nCols, 
    workspaceUi=null) {

    // if no workspaceUi passed, set one by default
    if (!workspaceUi) {
        workspaceUi = createWorkspaceUi();
    }
    
    // create the grid element
    const workspaceGrid = appendNewElement('div', WORKSPACE_GRID_CLASS, workspaceUi);
    // create n rows and n cells per row
    for (let row = 0; row < numberOfRows; row++) {
        const newRow = appendNewElement('div', 'grid-row', workspaceGrid);
        for (let col = 0; col < numberOfCols; col++) {
            const newCol = appendNewElement('div', 'grid-col', newRow);
        }
    }
}

/**
 * Resize workspace grid
 * @param {number} [numberOfRows=DEFAULT_GRID_SIZE.nRows] - number of rows of the grid
 * @param {number} [numberOfCols=DEFAULT_GRID_SIZE.nCols] - number of columns of the grid
*/
function resizeGrid(numberOfRows, numberOfCols) {
    const workspaceUi = document.querySelector(`.${WORKSPACE_UI_CLASS}`);

    // if workspaceUi exists, remove it in order to recreate it
    if (workspaceUi) {
        workspaceUi.remove();
    }

    createGrid(numberOfRows, numberOfCols);
}

export { createGrid, resizeGrid };