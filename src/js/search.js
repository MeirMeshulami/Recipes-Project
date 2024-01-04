import {leftMenu} from './left-menu';
import { apiKey } from './main-content';

export function getResults(searchText, createRecipeCard) {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchText}`)
        .then(res => res.json())
        .then(data => {
            leftMenu.innerHTML = "";
            if (data.results && data.results.length > 0) {
                data.results.forEach(recipe => {
                    createRecipeCard(recipe);
                });
            } else {
                leftMenu.innerHTML = "<p>No results found</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



