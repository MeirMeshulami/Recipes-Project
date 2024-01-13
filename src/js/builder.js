import { mainContent, updateServings } from "./main-content";
import { addToWishList,initiallyBtnStyle } from "./wishListFuncs";
import { apiKey } from "./main-content";

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

    const addToWishListBtn = document.createElement('button');
    addToWishListBtn.classList.add("btn","add-to-wishlist-btn");
    initiallyBtnStyle(addToWishListBtn,recipeData);
    addToWishListBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    addToWishListBtn.title = 'Add to Wish list';
    addToWishListBtn.addEventListener('click',() =>addToWishList(addToWishListBtn,recipeData));

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

export function buildTasteSection(recipeId) {
    const tasteSection = document.createElement('div');
    tasteSection.classList.add( 'd-flex', 'justify-content-between', 'custom-padding','my-4'); 

    const createFlavorElement = (title, content) => {
        const flavorElement = document.createElement('div');
        flavorElement.classList.add('text-center','d-flex','flex-column','justify-content-between'); 

        const titleElement = document.createElement('p');
        titleElement.classList.add('icon-titles');
        titleElement.textContent = title;
        flavorElement.appendChild(titleElement);

        const contentElement = document.createElement('div');
        contentElement.innerHTML = content;
        flavorElement.appendChild(contentElement);

        const ratingElement = document.createElement('p');
        ratingElement.classList.add('rating-element','icon-titles');
        flavorElement.appendChild(ratingElement);

        return flavorElement;
    };

    const spiciness = createFlavorElement('Spiciness', '<i class="fa-solid fa-pepper-hot"></i>');
    const fattiness = createFlavorElement('Fattiness', '<img src="../images/trans-fat.png">');
    const savoriness = createFlavorElement('Savoriness', '<img src="../images/savory.png">');
    const bitterness = createFlavorElement('Bitterness', '<img src="../images/bitter-gourd.png">');
    const sourness = createFlavorElement('Sourness', '<img src="../images/sourness.png">');
    const saltiness = createFlavorElement('Saltiness', '<img src="../images/salt.png">');
    const sweetness = createFlavorElement('Sweetness', '<img src="../images/cupcake.png">');

    tasteSection.appendChild(spiciness);
    tasteSection.appendChild(fattiness);
    tasteSection.appendChild(savoriness);
    tasteSection.appendChild(bitterness);
    tasteSection.appendChild(sourness);
    tasteSection.appendChild(saltiness);
    tasteSection.appendChild(sweetness);

    mainContent.appendChild(tasteSection);

    fetch(`https://api.spoonacular.com/recipes/${recipeId}/tasteWidget.json?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(recipeData => {           
            spiciness.querySelector('.rating-element').textContent = `Rating: ${recipeData.spiciness}`;
            fattiness.querySelector('.rating-element').textContent = `Rating: ${recipeData.fattiness}`;
            savoriness.querySelector('.rating-element').textContent = `Rating: ${recipeData.savoriness}`;
            bitterness.querySelector('.rating-element').textContent = `Rating: ${recipeData.bitterness}`;
            sourness.querySelector('.rating-element').textContent = `Rating: ${recipeData.sourness}`;
            saltiness.querySelector('.rating-element').textContent = `Rating: ${recipeData.saltiness}`;
            sweetness.querySelector('.rating-element').textContent = `Rating: ${recipeData.sweetness}`;
        })
        .catch(error => {
            console.error('Error fetching detailed recipe information:', error);
        });
}