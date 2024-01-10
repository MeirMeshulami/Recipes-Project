import { mainContent, updateServings } from "./main-content";

export function buildMainElements(data, servingsAmount) {
    const header = document.createElement('div');
    header.classList.add('d-flex', 'align-items-center', 'justify-content-between','custom-padding');

    const addToCart = document.createElement('button');
    addToCart.classList.add("btn", "btn-outline-danger", "add-to-cart-btn");
    addToCart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
    addToCart.title = 'Add to shopping list';

    const titleElement = document.createElement("h1");
    titleElement.classList.add("m-4", "text-center");
    titleElement.textContent = data.title;

    const addToWishList = document.createElement('button');
    addToWishList.classList.add("btn", "btn-outline-danger", "add-to-cart-btn");
    addToWishList.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    addToWishList.title = 'Add to Wish list';
    

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
    plusButton.addEventListener("click", () => updateServings(data.extendedIngredients, 1));

    const minusButton = document.createElement("button");
    minusButton.classList.add("btn", "btn-outline-secondary",'border-0','text-dark','btn-sm');
    minusButton.textContent = "-";
    minusButton.addEventListener("click", () => updateServings(data.extendedIngredients, -1));

    const readyInMinutes=document.createElement('p');
    readyInMinutes.classList.add("my-auto","fw-bold","serving-text");
    readyInMinutes.innerHTML=`<i class="fa-regular fa-clock"> </i> ${data.readyInMinutes} Minutes`;

    header.appendChild(addToCart);
    header.appendChild(titleElement);
    header.appendChild(addToWishList);
    
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

    const materialsContainer = document.querySelector(".materials-container");

    if (!materialsContainer) {
        const materialsContainer = document.createElement("div");
        materialsContainer.classList.add("materials-container");
        mainContent.appendChild(materialsContainer);
    } else {
        displayMaterials(materials, servingsAmount);
    }
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
