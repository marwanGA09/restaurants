import { Footer } from "./footer";
import { contentCreator } from "./content.creator.js";

const footerContainer = Footer.footerContainer();
const divCon = [];
for (let i = 0; i < 3; i++) divCon.push(document.createElement("div"));

divCon[0].appendChild(
  contentCreator("Our restaurant is ...", "h2", "left-header")
);
divCon[0].appendChild(
  contentCreator(
    "Transport yourself to the heart of Ethiopia at Addis Spice. We look forward to welcoming you and sharing the flavors and hospitality of Ethiopia with you!",
    "p",
    "footer__description"
  )
);

divCon[1].appendChild(contentCreator("Contact", "h4", "contact-us"));
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

export const footerElement = footerContainer;
