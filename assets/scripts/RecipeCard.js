// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
        this.attachShadow({ mode: 'open' }); // A1
    const article = document.createElement('article'); // A2
    const style = document.createElement('style'); // A3

    style.innerHTML = `* { font-family: sans-serif; margin: 0; ... }`; // A4

    this.shadowRoot.append(style, article); // A5
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

        const article = this.shadowRoot.querySelector('article'); // A6
        article.innerHTML = `
            <img src="${data.imgSrc}" alt="${data.imgAlt}">
            <p class="title"><a href="${data.titleLnk}">${data.titleTxt}</a></p>
            <p class="organization">${data.organization}</p>
            <div class="rating">
              <span>${data.rating}</span>
              <img src="/assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
              <span>(${data.numRatings})</span>
            </div>
            <time>${data.lengthTime}</time>
            <p class="ingredients">${data.ingredients}</p>
      `;
		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
	}
}

customElements.define('recipe-card', RecipeCard);

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
