// Locate DOM elements.
const ingredients = document.getElementById("ingredients");
const recipe = document.getElementById("recipe");

// Convert an array into children of a given DOM element.
function makeList(parent, arr) {
    for (const elem of arr) {
        const child = document.createElement("li");
        child.innerHTML = elem;
        parent.appendChild(child);
    }
}

makeList(ingredients, ["Foo", "Bar", "Baz", "Quux"]);
recipe.innerHTML = "Recipe instructions here.";
