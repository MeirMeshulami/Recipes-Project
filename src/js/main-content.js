import { buildMainElements, buildMainFooter } from "./builder";
import { updateShoppingList,addToShoppingList,displayShoppingList } from "./shoppingList"; 

export const apiKey = '1f74624cab934a19a54b3c8b3b0313ea';
export const mainContent = document.querySelector('.main-content');
let servingsAmount = 3;

export function getRecipeInformation(foodID,foodImage){
    mainContent.textContent = "";

    const foodMainImage = document.createElement("img");
    foodMainImage.classList.add("main-img", "img-fluid");
    foodMainImage.src = foodImage;
    mainContent.appendChild(foodMainImage);

    fetch(`https://api.spoonacular.com/recipes/${foodID}/information?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            const title = data.title;
            const materials = data.extendedIngredients;

            buildMainElements(materials, title, servingsAmount);
            displayMaterials(materials, servingsAmount);
            buildMainFooter(data.sourceUrl);
               
            const addToCart=document.querySelector('.add-to-cart-btn');
            addToCart.addEventListener('click',() =>addToShoppingList(materials, servingsAmount));
        })
        .catch(error => {
            console.error('Error fetching detailed recipe information:', error);
    });   
}

export function updateServings(materials, amount) {
    servingsAmount = Math.max(1, servingsAmount + amount);
    document.querySelector(".serving-text").textContent = servingsAmount;

    displayMaterials(materials, servingsAmount);
}

function displayMaterials(materials, servingsAmount) {
    const materialsContainer = document.querySelector('.materials-container');
    const materialsList = document.querySelector('.list-container');

    // If the list doesn't exist, create it
    if (!materialsList) {
        createMaterialsList(materials, servingsAmount);
        return;
    }

    // Select all existing li elements
    const materialItems = document.querySelectorAll('.list-group-item');

    // Update the content of each li element
    materialItems.forEach((materialItem, index) => {
        const material = materials[index];
        materialItem.innerHTML = `<i class="fas fa-check" style="margin-right: 10px;"></i> ${material.amount * servingsAmount} ${material.unit} ${material.name}`;
    });
}

function createMaterialsList(materials, servingsAmount) {
    const materialsList = document.createElement("ul");
    materialsList.classList.add("list-group", "list-group-flush", "list-container");

    const midpoint = Math.ceil(materials.length / 2);
    const column1 = document.createElement("div");
    column1.classList.add("col-md-6");
    const column2 = document.createElement("div");
    column2.classList.add("col-md-6");

    materials.forEach((material, index) => {
        const materialItem = document.createElement("li");
        materialItem.classList.add("list-group-item");
        materialItem.innerHTML = `<i class="fas fa-check" style="margin-right: 10px;"></i> ${material.amount * servingsAmount} ${material.unit} ${material.name}`;

        if (index < midpoint) {
            column1.appendChild(materialItem);
        } else {
            column2.appendChild(materialItem);
        }
    });

    const row = document.createElement("div");
    row.classList.add("row", "list-container");

    row.appendChild(column1);
    row.appendChild(column2);
    materialsList.appendChild(row);

    const existingMaterialsList = document.querySelector('.list-container');

    if (existingMaterialsList) {
        existingMaterialsList.replaceWith(materialsList);
    } else {
        const materialsContainer = document.createElement('div');
        materialsContainer.classList.add('materials-container');
        materialsContainer.appendChild(materialsList);
        mainContent.appendChild(materialsContainer);
    }
}
