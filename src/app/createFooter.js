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

divCon[1].appendChild(
  contentCreator("Our restraint is ...", "h2", "left-header")
);
divCon[1].appendChild(
  contentCreator(
    "lorem lorem lorem lorem lorem lorem lorem lorem lorej lorem lorem lore lorem ldore l jeo",
    "p",
    "footer__description"
  )
);

divCon[2].appendChild(
  contentCreator("Our restraint is ...", "h2", "left-header")
);
divCon[2].appendChild(
  contentCreator(
    "lorem lorem lorem lorem lorem lorem lorem lorem lorej lorem lorem lore lorem ldore l jeo",
    "p",
    "footer__description"
  )
);

divCon.forEach((div) => {
  footerContainer.appendChild(div);
});

console.log(footerContainer);
export const footerElement = footerContainer;
