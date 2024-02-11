import { contentCreator } from "./content.creator";
export function cardCreator(imgSource, heading, main) {
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.src = imgSource;
  card.appendChild(img);
  card.appendChild(contentCreator(heading, "h2", "card__heading"));
  card.appendChild(contentCreator(main, "p", "card__content"));
  return card;
}

export function cardCreatorTestimony(imgSource, quote, name) {
  const card = document.createElement("div");
  card.classList.add("quote-card");
  const img = document.createElement("img");
  img.src = imgSource;
  card.appendChild(img);
  card.appendChild(contentCreator(quote, "blockquote", "quote__content"));
  card.appendChild(contentCreator(name, "h3", "quote__name"));
  return card;
}
