export const apiKey = '1f74624cab934a19a54b3c8b3b0313ea';
const mainContent = document.querySelector('.main-content');
let servingsAmount = 3;

export function getRecipeInformation(foodID, foodImage) {
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

            buildMainElements(materials,title);

            const materialsContainer=document.createElement("div");
            materialsContainer.classList.add("materials-container")
            mainContent.appendChild(materialsContainer);

            displayMaterials(materials,servingsAmount);
        })
        .catch(error => {
            console.error('Error fetching detailed recipe information:', error);
        });
}

function buildMainElements(materials,title){
    const titleElement = document.createElement("h1");
            titleElement.classList.add("m-4");
            titleElement.textContent = title;
            mainContent.appendChild(titleElement);

            
            const servingsSection = document.createElement("div");
            servingsSection.classList.add("d-flex", "align-items-center", "m-4","custom-padding");

            servingsSection.innerHTML = `<i class="fa-solid fa-people-group" style="font-size: 24px;"></i>`;

            const servingsAmountDisplay = document.createElement("span");
            servingsAmountDisplay.textContent = servingsAmount;
            servingsAmountDisplay.classList.add("serving-text");

            const servingsButtons = document.createElement("div");
            servingsButtons.classList.add("btn-group");
            
            const plusButton = document.createElement("button");
            plusButton.classList.add("btn", "btn-outline-secondary","fw-bold");
            plusButton.textContent = "+";
            plusButton.addEventListener("click", () => updateServings(materials,1));

            const minusButton = document.createElement("button");
            minusButton.classList.add("btn", "btn-outline-secondary","fw-bold");
            minusButton.textContent = "-";
            minusButton.addEventListener("click", () => updateServings(materials,-1));

            servingsButtons.appendChild(plusButton);
            servingsButtons.appendChild(minusButton);

            
            servingsSection.appendChild(servingsAmountDisplay);
            servingsSection.appendChild(servingsButtons);

            mainContent.appendChild(servingsSection);

            const titleMaterials = document.createElement("h5");
            titleMaterials.textContent = "RECIPE INGREDIENTS";
            mainContent.appendChild(titleMaterials);
}

function updateServings(materials,amount){
    servingsAmount = Math.max(1, servingsAmount + amount);
    document.querySelector(".serving-text").textContent = servingsAmount;
    displayMaterials(materials,servingsAmount);
}

function displayMaterials(materials,amount){
    // Create and append list of material amounts
    if (materials && materials.length > 0) {
        const materialsList = document.createElement("ul");
        materialsList.classList.add("list-group", "list-group-flush", "list-container");

        // Calculate the midpoint index
        const midpoint = Math.ceil(materials.length / 2);

        // Create two columns
        const column1 = document.createElement("div");
        column1.classList.add("col-md-6");
        const column2 = document.createElement("div");
        column2.classList.add("col-md-6");

        materials.forEach((material, index) => {
            const materialItem = document.createElement("li");
            materialItem.classList.add("list-group-item");
            materialItem.innerHTML = `<i class="fas fa-check" style="margin-right: 10px;"></i> ${material.amount*amount} ${material.unit} ${material.name}`;

            // Append each material to the appropriate column
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
        const materialsContainer=document.querySelector(".materials-container");
        materialsContainer.textContent="";
        materialsContainer.appendChild(materialsList);
    }
}