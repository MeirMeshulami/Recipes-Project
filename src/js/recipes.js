export const leftMenu = document.querySelector('.left-menu');
const mainContent = document.querySelector('.main-content');

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
    textDiv.classList.add("preview-text");

    const mainTitle = document.createElement("h4");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = recipe.title;

    const secondTitle = document.createElement("p");
    secondTitle.classList.add("second-title");

    textDiv.appendChild(mainTitle);
    textDiv.appendChild(secondTitle);
    cardBody.appendChild(img);
    cardBody.appendChild(textDiv);

    card.appendChild(cardBody);
    leftMenu.appendChild(card);

    card.setAttribute('data-image', recipe.image);
    card.setAttribute('data-id', recipe.id);
    card.addEventListener('click', () => getRecipeInformation(recipe.id, recipe.image));
}

export function getRecipeInformation(foodID, foodImage) {
    mainContent.textContent = "";

    const foodMainImage = document.createElement("img");
    foodMainImage.classList.add("main-img", "img-fluid");
    foodMainImage.src = foodImage;
    mainContent.appendChild(foodMainImage);

    const apiKey = '1f74624cab934a19a54b3c8b3b0313ea';
    fetch(`https://api.spoonacular.com/recipes/${foodID}/information?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {           
            const title = data.title;
            const materials = data.extendedIngredients;

            // Create and append title
            const titleElement = document.createElement("h1");
            titleElement.classList.add("m-4");
            titleElement.textContent = title;
            mainContent.appendChild(titleElement);
            const titleMaterials = document.createElement("h5");
            //titleMaterials.classList.add("m-4");
            titleMaterials.textContent="RECIPE INGREDIENTS";
            mainContent.appendChild(titleMaterials);

            // Create and append list of material amounts
            if (materials && materials.length > 0) {
                const materialsList = document.createElement("ul");
                materialsList.classList.add("list-group", "list-group-flush","list-container");

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
                    materialItem.innerHTML = `<i class="fas fa-check" style="margin-right: 10px;"></i> ${material.amount} ${material.unit} ${material.name}`;


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
                mainContent.appendChild(materialsList);
            }

        })
        .catch(error => {
            console.error('Error fetching detailed recipe information:', error);
        });
}


