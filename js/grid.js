// Création et manipulation de la grille de dessin
// (initialisation, redimensionnement).

"use strict";
import { WORKSPACE_CONTAINER_CLASS } from './config.js';
import { createElementAttachClass } from './utils.js';

/**
 * init workspace-ui, attach it to workspace-container
 */
function createAppendWorkspaceUi() {
    const workspaceUi = createElementAttachClass('div', 'workspace-ui');
    const workspaceContainer = document.querySelector(`.${WORKSPACE_CONTAINER_CLASS}`);
    workspaceContainer.appendChild(workspaceUi);
}


export { createAppendWorkspaceUi };


// add title, svg
// create grid