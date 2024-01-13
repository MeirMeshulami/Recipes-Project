import { createRecipeCard } from "./card";

const Wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

export function addToWishList(addToWishListBtn, recipeData) {
    const wishListContainer = document.querySelector('.wish-list-container');
    
    const isAlreadyInWishlist = isInWishList(recipeData);

    if (!isAlreadyInWishlist) {
        const card = createRecipeCard(recipeData);

        Wishlist.push({
            recipe: recipeData,
        });

        wishListContainer.appendChild(card);

        addToWishListBtn.classList.remove("btn-outline-danger");
        addToWishListBtn.classList.add("btn-danger");

        localStorage.setItem('wishlist', JSON.stringify(Wishlist));
    } else {
        console.log('Recipe already in wishlist');

        const updatedWishlist = Wishlist.filter(item => item.recipe.id !== recipeData.id);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        const cardToRemove = wishListContainer.querySelector(`.recipe-card-${recipeData.id}`);
        if (cardToRemove) {
            cardToRemove.remove();
            console.log('Recipe has been removed from wishlist'); 
        }
        
        addToWishListBtn.classList.remove("btn-danger");
        addToWishListBtn.classList.add("btn-outline-danger");
    }
}

export function displayWishList() {
    const wishListContainer = document.querySelector('.wish-list-container');

    wishListContainer.innerHTML = '';
    Wishlist.forEach(item => {
        wishListContainer.appendChild(createRecipeCard(item.recipe));
    });
}
export function initiallyBtnStyle(addToWishListBtn,recipe){
    const isExist=isInWishList(recipe);
    if(isExist){       
        addToWishListBtn.classList.add('btn-danger');
    }else{
        addToWishListBtn.classList.add('btn-outline-danger','text-whit');
    }
}
function isInWishList(recipeToSearch){  
    return Wishlist.some(item => item.recipe.id === recipeToSearch.id);
}


