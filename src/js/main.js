import { getResults } from './search';
import { createRecipeCard } from './card';
import { getRecipeInformation } from './main-content';
import { displayShoppingList } from './shoppingList';
import { displayWishList } from './wishlist';

const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
displayShoppingList(shoppingList);
displayWishList();

const searchBtn = document.querySelector('.search-btn');
const textBox = document.querySelector('.search-box');

function handleSearch() {
    getResults(textBox.value, createRecipeCard, getRecipeInformation);
}

searchBtn.addEventListener('click', handleSearch);

textBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
