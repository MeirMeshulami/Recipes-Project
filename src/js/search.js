import { apiKey } from './main-content';

export function getResults(searchText, createRecipeCard) {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchText}`)
        .then(res => res.json())
        .then(data => {
            const leftMenu = document.querySelector('.left-menu');
            leftMenu.innerHTML = "";
            if (data.results && data.results.length > 0) {
                data.results.forEach(recipe => {
                   const card= createRecipeCard(recipe);
                   leftMenu.appendChild(card);
                });
            } else {
                leftMenu.innerHTML = "<p class='titles m-4 fw-bold'>No results found</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



