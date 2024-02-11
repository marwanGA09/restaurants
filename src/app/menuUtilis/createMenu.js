import { contentCreator } from "../content.creator";

export function createMenuCard(
  imgSrc,
  foodName,
  ingredients,
  description,
  price
) {
  const menuCard = document.createElement("div");
  menuCard.classList.add("menu");
  const img = document.createElement("img");
  img.src = imgSrc;
  menuCard.appendChild(img);
  menuCard.appendChild(contentCreator(foodName, "h2", "menu__name"));
  menuCard.appendChild(
    contentCreator(`Ingredients: ${ingredients}`, "h4", "menu__ingredients")
  );
  menuCard.appendChild(contentCreator(description, "p", "menu__description"));
  menuCard.appendChild(
    contentCreator(`Price <span>$${price}</span>`, "p", "menu__price")
  );
  return menuCard;
}
