import { getResults } from './search';
import { createRecipeCard } from './card';
import { getRecipeInformation } from './main-content';
import { displayShoppingList,getShoppingList } from './shoppingList';
import { displayWishList } from './wishListFuncs';

displayShoppingList(getShoppingList());
displayWishList();

const searchBtn = document.querySelector('.search-btn');
const textBox = document.querySelector('.search-box');

function handleSearch() {
    getResults(textBox.value, createRecipeCard, getRecipeInformation);
}

searchBtn.addEventListener('click', handleSearch);

textBox.addEventListener('keydown', (event) => {
    
    if (event.key === 'Enter') {
        event.preventDefault();
        handleSearch();
    }
});
