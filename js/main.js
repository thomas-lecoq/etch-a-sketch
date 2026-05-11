import { drawOnGrid } from './drawing.js';
import { createGrid } from './grid.js';
import { initGridSizeInput } from './menu.js';

createGrid();
initGridSizeInput();
drawOnGrid();