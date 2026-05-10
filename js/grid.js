// Création et manipulation de la grille de dessin
// (initialisation, redimensionnement).

import { WORKSPACE_CONTAINER_CLASS } from './config.js';
import { appendNewElement } from './utils.js';

/**
 * init workspace-ui, attach it to workspace-container
 */
function createWorkspaceUi() {
    const workspaceContainer = document.querySelector(`.${WORKSPACE_CONTAINER_CLASS}`);
    appendNewElement('div', 'workspace-ui', workspaceContainer)
}


export { createWorkspaceUi };


// add title, svg
// create grid