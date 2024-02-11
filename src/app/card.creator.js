import { contentCreator } from "./content.creator";
export function cardCreator(imgSource, heading, main) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  img.src = imgSource;
  card.appendChild(img);
  card.appendChild(contentCreator(heading, "h2", "card__heading"));
  card.appendChild(contentCreator(main, "p", "card__content"));
  return card;
}
