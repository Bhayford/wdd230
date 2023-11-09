// links.js

const baseURL = "https://bhayford.github.io/wdd230/";

const linksURL = baseURL + "data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data); // Test: Output the JSON data to the console
    displayLinks(data.lessons);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

function displayLinks(weeks) {
  // Assuming you have an existing HTML element with the ID "activity-links" to display the links
  const activityLinksElement = document.getElementById("activity-links");

  weeks.forEach((week) => {
    const weekElement = document.createElement("div");
    weekElement.classList.add("week");

    const weekTitle = document.createElement("h3");
    weekTitle.textContent = `Week ${week.lesson}`;

    const linksList = document.createElement("ul");

    week.links.forEach((link) => {
      const linkItem = document.createElement("li");
      const linkAnchor = document.createElement("a");
      linkAnchor.href = baseURL + link.url;
      linkAnchor.textContent = link.title;
      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });

    weekElement.appendChild(weekTitle);
    weekElement.appendChild(linksList);
    activityLinksElement.appendChild(weekElement);
  });
}

getLinks();
