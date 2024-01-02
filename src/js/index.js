
// Function to create a recipe card
function createRecipeCard(recipe) {
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
}

// Function to handle the fetch and create cards
function getResults(event) {
    event.preventDefault();

    const apiKey = 'e4e6e391a4984608ad5372d5becfb4bc';
    const searchText = textBox.value;

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchText}`)
        .then(res => res.json())
        .then(data => {
            leftMenu.innerHTML = ""; 

            if (data.results && data.results.length > 0) {
                data.results.forEach(createRecipeCard);
                // import('./content.js'); 
            } else {
                leftMenu.innerHTML = "<p>No results found</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

const searchBtn = document.querySelector('.search-btn');
const textBox = document.querySelector(".search-box");
const leftMenu = document.querySelector(".left-menu");

searchBtn.addEventListener('click', getResults);
