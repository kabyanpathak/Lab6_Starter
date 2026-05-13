// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
    // Get the recipes from localStorage
    let recipes = getRecipesFromStorage();
    // Add each recipe to the <main> element
    addRecipesToDocument(recipes);
    // Add the event listeners to the form elements
    initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : [];
    // A9. - Complete the functionality as described in this function
    //           header. It is possible in only a single line, but should
    //           be no more than a few lines.
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
    const main = document.querySelector('main'); // A10
    for (const recipe of recipes) { // A11
        const card = document.createElement('recipe-card');
        card.data = recipe;
        main.append(card);
    }
    // A10. - Get a reference to the <main> element
    // A11. - Loop through each of the recipes in the passed in array,
    //            create a <recipe-card> element for each one, and populate
    //            each <recipe-card> with that recipe data using element.data = ...
    //            Append each element to <main>
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
    // EXPLORE - START (All explore numbers start with B)
    // B1. - Complete the functionality as described in this function
    //            header. It is possible in only a single line, but should
    //            be no more than a few lines.
}

/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
    const form = document.querySelector('form'); // B2

    form.addEventListener('submit', (event) => { // B3
        event.preventDefault(); // Prevent page refresh

        const data = new FormData(form); // B4
        const recipeObject = Object.fromEntries(data.entries()); // B5

        const card = document.createElement('recipe-card'); // B6
        card.data = recipeObject; // B7
        document.querySelector('main').append(card); // B8

        const recipes = getRecipesFromStorage(); // B9
        recipes.push(recipeObject);
        saveRecipesToStorage(recipes);
    });

    const clear = document.querySelector('.danger'); // B10
    clear.addEventListener('click', () => { // B11
        localStorage.clear(); // B12
        document.querySelector('main').innerHTML = ''; // B13
    });

    // B2. - Get a reference to the <form> element
    // B3. - Add an event listener for the 'submit' event, which fires when the
    //            submit button is clicked
    // Steps B4-B9 will occur inside the event listener from step B3
    // B4. - Create a new FormData object from the <form> element reference above
    // B5. - Create an empty object (we'll refer to this object as recipeObject to
    //            make this easier to read), and then extract the keys and corresponding
    //            values from the FormData object and insert them into recipeObject
    // B6. - Create a new <recipe-card> element
    // B7. - Add the recipeObject data to <recipe-card> using element.data
    // B8. - Append this new <recipe-card> to <main>
    // B9. - Get the recipes array from localStorage, add this new recipe to it, and
    //            then save the recipes array back to localStorage
    // B10. - Get a reference to the "Clear Local Storage" button
    // B11. - Add a click event listener to clear local storage button
    // Steps B12 & B13 will occur inside the event listener from step B11
    // B12. - Clear the local storage
    // B13. - Delete the contents of <main>
}
