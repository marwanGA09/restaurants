import { Footer } from "./footer";
import { contentCreator } from "./content.creator.js";

console.log(contentCreator("Our restraint is ...", "p", "left-header"));
const footerContainer = Footer.footerContainer();
const divCon = [];
for (let i = 0; i < 3; i++) divCon.push(document.createElement("div"));

console.log(divCon);

divCon[0].appendChild(
  contentCreator("Our restraint is ...", "h2", "left-header")
);
divCon[0].appendChild(
  contentCreator(
    "lorem lorem lorem lorem lorem lorem lorem lorem lorej lorem lorem lore lorem ldore l jeo",
    "p",
    "footer__description"
  )
);

divCon[1].appendChild(contentCreator("contact", "h4", "contact-us"));
divCon[1].appendChild(
  contentCreator("Phone: <span>+251924554506</span>", "p", "footer__phone")
);
divCon[1].appendChild(
  contentCreator("Address: Addis Ababa, Bole Michael", "p", "footer__address")
);
divCon[1].appendChild(
  contentCreator("Time: Everyday from 5:30AM to 10:30PM ", "p", "footer__time")
);

divCon[2].appendChild(contentCreator("Subscribe", "h4", "footer__subscribe"));
// divCon[2].appendChild(
const input = contentCreator("", "input", "footer__input");
input.placeholder = "Email";
input.type = "email";
divCon[2].appendChild(input);
divCon[2].appendChild(
  contentCreator("Subscribe", "button", "footer__subscribe-btn")
);

divCon.forEach((div) => {
  footerContainer.appendChild(div);
});

console.log(footerContainer);
export const footerElement = footerContainer;
