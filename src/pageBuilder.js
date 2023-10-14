import Icon from "./violin.png";
function pageBuilder(count) {
  let headerHolder = document.createElement("div");
  headerHolder.classList.add("headerHolder");
  let header = document.createElement("div");
  headerHolder.appendChild(header);
  header.setAttribute("id", "header");
  let stradivari = document.createElement("div");
  stradivari.textContent = "Stradivari's market";
  stradivari.setAttribute("id", "stradivari");
  header.appendChild(stradivari);
  for (let index = 0; index < 4; index++) {
    let button = document.createElement("button");
    button.textContent = "page: " + index;
    header.appendChild(button);
  }
  document.body.appendChild(headerHolder);
  let layout = document.createElement("div");
  layout.setAttribute("id", "layout");

  let violinImage = document.createElement("img");

  violinImage.setAttribute("src", Icon);
  violinImage.setAttribute("id", "violin");

  let violinContainer = document.createElement("div");

  violinContainer.setAttribute("id", "violinContainer");

  violinContainer.appendChild(violinImage);

  layout.appendChild(violinContainer);

  for (let index = 0; index < count; index++) {
    let card = document.createElement("div");
    let title = document.createElement("h1");
    let desc = document.createElement("div");

    desc.classList.add("desc");
    card.classList.add("card");

    card.appendChild(title);
    card.appendChild(desc);
    layout.appendChild(card);

    title.textContent = "Title";
    desc.textContent =
      "Description about some of the coolest violins listings in the world";
  }

  document.body.appendChild(layout);
}
export default pageBuilder;
