import { contentCreator } from "../content.creator";

class Contact {
  static createChief(imgSrc, name, gmail) {
    const container = document.createElement("div");
    container.classList.add("chief");
    container.appendChild(contentCreator(`Chief ${name}`, "h4", "chief__name"));
    container.appendChild(
      contentCreator(`Gmail: <a >${gmail}</a>`, "p", "chief__email")
    );
    const img = document.createElement("img");
    img.src = imgSrc;
    container.appendChild(img);
    return container;
  }

  static location(imgSrc) {
    const container = document.createElement("div");
    container.classList.add("location");
    const img = document.createElement("img");
    img.src = imgSrc;
    container.appendChild(img);
    container.appendChild(
      contentCreator("Welcome to Addis Spice", "h2", "name")
    );
    container.appendChild(
      contentCreator(
        "Addis Ababa, Bole michael, road number 2321/a",
        "p",
        "street"
      )
    );
    container.appendChild(contentCreator("Send", "button", "send"));
    const textArea = contentCreator("", "textarea", "text-area");
    textArea.cols = 65;
    textArea.rows = 10;
    textArea.placeholder = "Add your comment here";
    container.appendChild(textArea);
    return container;
  }
}

import img from "./../../imgs/shiro.jpg";

export const chiefContainer = document.createElement("div");
chiefContainer.classList.add("chief-container");
chiefContainer.appendChild(
  Contact.createChief(img, "Yordanos Alemayehu", "yordanosalemayehu@gmail.com")
);
chiefContainer.appendChild(
  Contact.createChief(img, "Zahra Ahmed ", "zahraahmed@gmail.com")
);
export const location = Contact.location(img);
