import "./style.scss";
import "./template.html";

import { log } from "./app/createheader";
import { buttons } from "./app/createheader";
import { footerElement } from "./app/createFooter";
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
// create navigation
nav.appendChild(log);
buttons.forEach((bt) => {
  nav.appendChild(bt);
});
// container.appendChild(nav);

import { homeContainer, featureContainer } from "./app/homeCreator";
// console.log(homeContainer);
container.appendChild(homeContainer);
container.appendChild(featureContainer);

container.appendChild(footerElement);
