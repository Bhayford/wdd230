// Declare references to the input, button, and list elements.
const inputElement = document.getElementById("favchap");
const addButton = document.querySelector("button");
const list = document.getElementById("list");

// Add a click event listener for the Add Chapter button.
addButton.addEventListener("click", () => {
  // Check if the input is not blank.
  if (inputElement.value.trim() !== "") {
    // Create a new list item element.
    const listItem = document.createElement("li");

    // Create a delete button for the list item.
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    // Populate the list item's textContent with the input value.
    listItem.textContent = inputElement.value;

    // Append the delete button to the list item.
    listItem.appendChild(deleteButton);

    // Append the list item to the unordered list in the HTML.
    list.appendChild(listItem);

    // Add an event listener to the delete button to remove the list item when clicked.
    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    // Clear the input value.
    inputElement.value = "";

    // Send focus back to the input element.
    inputElement.focus();
  } else {
    // If the input is blank, provide a message or return focus to the input field.
    alert("Please enter a chapter before adding.");
    inputElement.focus();
  }
});
