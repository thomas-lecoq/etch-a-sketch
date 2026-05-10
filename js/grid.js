// Création et manipulation de la grille de dessin
// (initialisation, redimensionnement).

import { WORKSPACE_CONTAINER_CLASS } from './config.js';
import { appendNewElement } from './utils.js';

/**
 * Init workspace-ui, attach it to workspace-container
 * @returns {HTMLElement} workspaceUi element
*/
function createWorkspaceUi() {
    const workspaceContainer = document.querySelector(`.${WORKSPACE_CONTAINER_CLASS}`);
    const workspaceUi = appendNewElement('div', 'workspace-ui', workspaceContainer);

    return workspaceUi;
}


export { createWorkspaceUi };

// add title

// create grid