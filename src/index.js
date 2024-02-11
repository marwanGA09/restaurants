import "./style.scss";
import "./template.html";

import { log } from "./app/createheader";
import { buttons } from "./app/createheader";
import { footerElement } from "./app/createFooter";
const container = document.querySelector(".sub-container");
const nav = document.querySelector(".nav");
nav.appendChild(log);
buttons.forEach((bt) => {
  nav.appendChild(bt);
});

import { homeContainer, featureContainer } from "./app/homeUtils/homeCreator";
import { testimony } from "./app/homeUtils/testimonyCreator";
import { createMenuCard } from "./app/menuUtilis/createMenu";

import img from "./imgs/shiro.jpg";
import { chief, location } from "./app/contactUtils/createUtils";

container.appendChild(homeContainer);
container.appendChild(featureContainer);
container.appendChild(testimony);
container.appendChild(footerElement);
buttons.forEach((bt) => {
  bt.addEventListener("click", (ev) => {
    const target = ev.target.id;
    container.replaceChildren();
    if (target === "home") {
      container.appendChild(homeContainer);
      container.appendChild(featureContainer);
      container.appendChild(testimony);
      container.appendChild(footerElement);
    } else if (target === "menu") {
      container.appendChild(createMenuCard(img));
      container.appendChild(footerElement);
    } else if (target === "contact") {
      container.appendChild(chief);
      container.appendChild(location);
      container.appendChild(footerElement);
    }
  });
});
