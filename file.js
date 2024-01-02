const searchBtn = document.querySelector('.search-btn');
const textBox = document.querySelector(".search-box");
const leftMenu = document.querySelector(".left-menu");

function createRecipeCard(recipe) {
    // Create a button element instead of a div
    const card = document.createElement("button");
    card.classList.add("card", "recipe-card", "btn");

    // Create a card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex");

    // Create an image element
    const img = document.createElement("img");
    img.src = recipe.image;
    img.alt = recipe.title;
    img.classList.add("card-img-top"); // Adjust size and margin

    // Create a title element
    const title = document.createElement("p");
    title.classList.add("card-title");
    title.textContent = recipe.title;

    // Append elements to the card body
    cardBody.appendChild(img);
    cardBody.appendChild(title);

    // Append the card body to the card
    card.appendChild(cardBody);

    // Append the card to the left-menu
    leftMenu.appendChild(card);
}

function getResults(event) {
    event.preventDefault();

    const apiKey = 'e4e6e391a4984608ad5372d5becfb4bc';
    const searchText = textBox.value;

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchText}`)
        .then(res => res.json())
        .then(data => {
            // Clear previous search results
            leftMenu.innerHTML = "";

            // Check if there are results
            if (data.results && data.results.length > 0) {
                // Iterate through each result and create a card
                data.results.forEach(recipe => {
                    createRecipeCard(recipe);
                });
            } else {
                // Display a message if no results are found
                leftMenu.innerHTML = "<p>No results found</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

searchBtn.addEventListener('click', getResults);
