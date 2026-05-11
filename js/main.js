import { drawOnGrid } from './drawing.js';
import { createGrid } from './grid.js';
import { initGridSizeInput, resetGrid } from './menu.js';

createGrid();
initGridSizeInput();
drawOnGrid();
resetGrid();