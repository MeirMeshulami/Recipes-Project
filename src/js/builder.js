import { mainContent, updateServings } from "./main-content";
import { addToWishList } from "./wishlist";

export function buildMainElements(recipeData, servingsAmount) {
    const header = document.createElement('div');
    header.classList.add('d-flex', 'align-items-center', 'justify-content-between','custom-padding');

    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add("btn", "btn-outline-danger", "add-to-cart-btn");
    addToCartBtn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
    addToCartBtn.title = 'Add to shopping list';

    const titleElement = document.createElement("h1");
    titleElement.classList.add("m-4", "text-center");
    titleElement.textContent = recipeData.title;
    
    const addToWishListBtn = document.createElement('button');
    addToWishListBtn.classList.add("btn", "btn-outline-danger", "add-to-wishList-btn");
    addToWishListBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    addToWishListBtn.title = 'Add to Wish list';
    addToWishListBtn.addEventListener('click',() =>addToWishList(recipeData));
    
    const servingsSection = document.createElement("div");
    servingsSection.classList.add("d-flex", "align-items-center", "m-4", "custom-padding",'justify-content-between');
    
    const servingsAmountSection=document.createElement('div');
    servingsAmountSection.classList.add("my-auto");
    servingsAmountSection.innerHTML = `<i class="fa-solid fa-people-group" style="font-size: 24px;"></i>`;

    const servingsAmountDisplay = document.createElement("span");
    servingsAmountDisplay.textContent = servingsAmount;
    servingsAmountDisplay.classList.add("serving-text","mt-2");

    const servingsButtons = document.createElement("div");
    servingsButtons.classList.add("btn-group"); 

    const plusButton = document.createElement("button");
    plusButton.classList.add("btn", "btn-outline-secondary",'border-0','text-dark','btn-sm');
    plusButton.textContent = "+";
    plusButton.addEventListener("click", () => updateServings(recipeData.extendedIngredients, 1));

    const minusButton = document.createElement("button");
    minusButton.classList.add("btn", "btn-outline-secondary",'border-0','text-dark','btn-sm');
    minusButton.textContent = "-";
    minusButton.addEventListener("click", () => updateServings(recipeData.extendedIngredients, -1));

    const readyInMinutes=document.createElement('p');
    readyInMinutes.classList.add("my-auto","fw-bold","serving-text");
    readyInMinutes.innerHTML=`<i class="fa-regular fa-clock"> </i> ${recipeData.readyInMinutes} Minutes`;

    header.appendChild(addToCartBtn);
    header.appendChild(titleElement);
    header.appendChild(addToWishListBtn);
    
    servingsAmountSection.appendChild(servingsAmountDisplay);
    servingsAmountSection.appendChild(plusButton);
    servingsAmountSection.appendChild(minusButton);
    servingsAmountSection.appendChild(servingsButtons);
    servingsSection.appendChild(servingsAmountSection);
    servingsSection.appendChild(readyInMinutes);

    mainContent.appendChild(header);
    mainContent.appendChild(servingsSection);

    const titleMaterials = document.createElement("h5");
    titleMaterials.textContent = "RECIPE INGREDIENTS";
    mainContent.appendChild(titleMaterials);
}

export function buildMainFooter(directions) {
    const footer = document.createElement('div');
    footer.classList.add("footer", "custom-padding", "mt-4", "text-center");

    const infoTitle = document.createElement('h4');
    infoTitle.classList.add("titles", "m-4");
    infoTitle.textContent = "How to cook it";

    const info = document.createElement('p');
    info.textContent = "This recipe was carefully designed and tested by Spooncular. Please check out directions at their website.";

    const dirBtn = document.createElement('button');
    dirBtn.textContent = "Directions";
    dirBtn.classList.add("btn", "btn-warning", "fw-bold", "mt-4");

    footer.appendChild(infoTitle);
    footer.appendChild(info);
    footer.appendChild(dirBtn);
    mainContent.appendChild(footer);

    dirBtn.addEventListener('click', () => {
        window.open(directions, '_blank');
    });
}
