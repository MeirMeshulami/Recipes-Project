import { createRecipeCard } from "./card";


export function addToWishList(addToWishListBtn, recipeData) {
    const wishList=getWishlist();

    const wishListContainer = document.querySelector('.wish-list-container');
    console.log(wishList);
    const isAlreadyInWishlist = isInWishList(recipeData);

    if (!isAlreadyInWishlist) {
        // Adding to Local storage
        wishList.push({
            recipe: recipeData,
        });
        localStorage.setItem('wishlist', JSON.stringify(wishList));

        // Adding to UI
        const card = createRecipeCard(recipeData);
        wishListContainer.appendChild(card);

        addToWishListBtn.classList.remove("btn-outline-danger");
        addToWishListBtn.classList.add("btn-danger");    
    } else {
        console.log('Recipe already in wishlist');
        
        // Removing from Local storage
        const updatedWishlist = wishList.filter(item => item.recipe.id !== recipeData.id);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

        // Removing from UI
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
    getWishlist().forEach(item => {
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
    return getWishlist().some(item => item.recipe.id === recipeToSearch.id);
}

function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}


