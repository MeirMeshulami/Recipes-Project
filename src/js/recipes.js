const leftMenu = document.querySelector('.left-menu');
const mainContent = document.querySelector('.main-content');

export function createRecipeCard(recipe) {
    console.log(recipe);
    debugger;
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
    const apiKey = '1f74624cab934a19a54b3c8b3b0313ea';
    
    fetch(`https://api.spoonacular.com/recipes/${foodID}/information?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            
            console.log('Detailed Recipe Information:', data);
            
        })
        .catch(error => {
            console.error('Error fetching detailed recipe information:', error);
        });
}
