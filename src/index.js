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

import { chiefContainer, location } from "./app/contactUtils/createUtils";
import { menuContainer } from "./app/menuUtilis/menu";

container.appendChild(chiefContainer);
container.appendChild(location);
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
      container.appendChild(menuContainer);
      container.appendChild(footerElement);
    } else if (target === "contact") {
      container.appendChild(chiefContainer);
      container.appendChild(location);
      container.appendChild(footerElement);
    }
  });
});
