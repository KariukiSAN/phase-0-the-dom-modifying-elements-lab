// Create a new div element and append it to the body
const element = document.createElement("div");
document.body.append(element);

// Create a new ul (unordered list) element
const ul = document.createElement("ul");

// Create three li elements and append them to the ul
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the ul to the previously created div
element.append(ul);

// Retrieve the element with the id "main"
const main = document.getElementById("main");

// Update the HTML content of the retrieved main element
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// Update the text content of the previously created div
element.textContent = "You've changed what's on the screen!";

// Apply styles to the div
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = "2"; // Corrected: Added double quotes around "2"

// Apply a class name to the div
element.className = "pet-listing dog"; // This line is correct, assuming 'pet-listing' and 'dog' are valid CSS classes

// Remove the class name "dog" from the div and add the classes "cat" and "sale"
element.classList.remove("dog");
element.classList.add("cat", "sale");

// Remove the entire ul element from the DOM
ul.remove();


