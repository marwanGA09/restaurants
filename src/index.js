import "./style.scss";
import "./template.html";

import { log } from "./app/createheader";
import { buttons } from "./app/createheader";
import { footerElement } from "./app/createFooter";
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
nav.appendChild(log);
buttons.forEach((bt) => {
  nav.appendChild(bt);
});

// *********** dynamically change
import { homeContainer, featureContainer } from "./app/homeUtils/homeCreator";
import { testimony } from "./app/homeUtils/testimonyCreator";
import { createMenuCard } from "./app/menuUtilis/createMenu";
container.appendChild(homeContainer);
container.appendChild(featureContainer);

container.appendChild(testimony);
// test

import img from "./imgs/shiro.jpg";
import { chief, location } from "./app/contactUtils/createUtils";
container.appendChild(createMenuCard(img));

container.appendChild(chief);
container.appendChild(location);

// *********** always on the page
container.appendChild(footerElement);
