
export function getResults(searchText, createRecipeCard, getRecipeInformation) { 
    const apiKey = '1f74624cab934a19a54b3c8b3b0313ea';   
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchText}`;
    console.log('Fetching data from:', apiUrl);

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            leftMenu.innerHTML = ""; 

            if (data.results && data.results.length > 0) {
                data.results.forEach(recipe => {
                    createRecipeCard(recipe);
                });
            } else {
                leftMenu.innerHTML = "<p>No results found</p>";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
