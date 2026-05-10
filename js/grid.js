// Création et manipulation de la grille de dessin
// (initialisation, redimensionnement).

import { WORKSPACE_CONTAINER_CLASS } from './config.js';
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
    const workspaceUi = appendNewElement('div', 'workspace-ui', workspaceContainer);
    appendWorkspaceTitle(workspaceUi, 'Draw here !');

    return workspaceUi;
}


export { createWorkspaceUi };

// add title

// create grid