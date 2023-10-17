const inputElement = document.getElementById("favchap");
const addButton = document.querySelector("button");
const list = document.getElementById("list");

addButton.addEventListener("click", () => {
  if (inputElement.value.trim() !== "") {
    const listItem = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    listItem.textContent = inputElement.value;

    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    inputElement.value = "";

    inputElement.focus();
  } else {
    alert("Please enter a chapter before adding.");
    inputElement.focus();
  }
});
