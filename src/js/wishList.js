import { createRecipeCard } from "./card";

export function addToWishList(recipeData) {

    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isAlreadyInWishlist = existingWishlist.some(item => item.recipe.id === recipeData.id);
    
    if (!isAlreadyInWishlist) {
        const card = createRecipeCard(recipeData);
        
        existingWishlist.push({
            recipe: recipeData,
        });
              
        localStorage.setItem('wishlist', JSON.stringify(existingWishlist));

        const wishListContainer = document.querySelector('.wish-list-container');
        wishListContainer.appendChild(card);
    } else {
        console.log('Recipe already in wishlist');    
    }
}

export function displayWishList() {
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishListContainer = document.querySelector('.wish-list-container');

    wishListContainer.innerHTML = '';
    existingWishlist.forEach(item => {
        wishListContainer.appendChild(createRecipeCard(item.recipe));
    });
}


