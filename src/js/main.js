import { getResults } from './search';
import { createRecipeCard, getRecipeInformation } from './recipes';

const searchBtn = document.querySelector('.search-btn');
const textBox = document.querySelector('.search-box');

searchBtn.addEventListener('click', () => getResults(textBox.value, createRecipeCard, getRecipeInformation));
