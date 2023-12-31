import { getRecipeInformation } from "./main-content";
export const leftMenu = document.querySelector('.left-menu');

export function createRecipeCard(recipe) {
    const card = document.createElement("button");
    card.classList.add("card", "recipe-card", "btn");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex");

    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.title;
    img.classList.add("card-img-top");

    const textDiv = document.createElement("div");
    textDiv.classList.add("preview-text","mt-2");

    const mainTitle = document.createElement("h4");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = recipe.title;

    const secondTitle = document.createElement("p");
    secondTitle.classList.add("second-title");
    secondTitle.textContent=recipe.title;

    textDiv.appendChild(mainTitle);
    textDiv.appendChild(secondTitle);
    cardBody.appendChild(img);
    cardBody.appendChild(textDiv);

    card.appendChild(cardBody);
    leftMenu.appendChild(card);

    card.addEventListener('click', () => getRecipeInformation(recipe.id, recipe.image));
}


