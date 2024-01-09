import { mainContent, updateServings } from "./main-content";

export function buildMainElements(materials, title, servingsAmount) {
    const titleElement = document.createElement("h1");
    titleElement.classList.add("m-4");
    titleElement.textContent = title;
    mainContent.appendChild(titleElement);

    const servingsSection = document.createElement("div");
    servingsSection.classList.add("d-flex", "align-items-center", "m-4", "custom-padding");
    servingsSection.innerHTML = `<i class="fa-solid fa-people-group" style="font-size: 24px;"></i>`;

    const addToCart = document.createElement('button');
    addToCart.classList.add("btn", "btn-danger", "add-to-cart-btn","m-4","justify-content-between");
    addToCart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
    addToCart.title = 'Add to shopping list'; 

    const servingsAmountDisplay = document.createElement("span");
    servingsAmountDisplay.textContent = servingsAmount;
    servingsAmountDisplay.classList.add("serving-text");

    const servingsButtons = document.createElement("div");
    servingsButtons.classList.add("btn-group");

    const plusButton = document.createElement("button");
    plusButton.classList.add("btn", "btn-outline-secondary", "fw-bold");
    plusButton.textContent = "+";
    plusButton.addEventListener("click", () => updateServings(materials, 1));

    const minusButton = document.createElement("button");
    minusButton.classList.add("btn", "btn-outline-secondary", "fw-bold");
    minusButton.textContent = "-";
    minusButton.addEventListener("click", () => updateServings(materials, -1));

    servingsButtons.appendChild(plusButton);
    servingsButtons.appendChild(minusButton);
    servingsSection.appendChild(servingsAmountDisplay);
    servingsSection.appendChild(servingsButtons);
    servingsSection.appendChild(addToCart);

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
