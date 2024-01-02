import { getResults } from './search.js';
import { createRecipeCard, getRecipeInformation } from './recipes.js';

const searchBtn = document.querySelector('.search-btn');
const textBox = document.querySelector('.search-box');
export const leftMenu = document.querySelector('.left-Menu');
const mainContent = document.querySelector('.main-content');

searchBtn.addEventListener('click', () => getResults(textBox.value, createRecipeCard, getRecipeInformation));
