import { getResults } from './search';
import { createRecipeCard } from './left-menu';
import { getRecipeInformation } from './main-content';

const searchBtn = document.querySelector('.search-btn');
const textBox = document.querySelector('.search-box');

searchBtn.addEventListener('click', () => getResults(textBox.value, createRecipeCard, getRecipeInformation));
