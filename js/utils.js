// Fonctions utilitaires réutilisables, indépendantes du métier
// (ex : génération de couleur aléatoire, clamp d'une valeur, etc.).

"use strict";

function createElementAttachClass(elementType, className) {
    const element = document.createElement(elementType);
    element.classList.add(className);

    return element;
}

export { createElementAttachClass };