import img from "./../imgs/shiro.jpg";
import { cardCreatorTestimony } from "./card.creator";
export const testimony = document.createElement("div");
testimony.classList.add("testimony");

testimony.appendChild(
  cardCreatorTestimony(
    img,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a amet quia doloremque, dolor voluptas minus ",
    "Yassin Ga"
  )
);
testimony.appendChild(
  cardCreatorTestimony(
    img,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a amet quia doloremque, dolor voluptas minus ",
    "Yassin Ga"
  )
);
testimony.appendChild(
  cardCreatorTestimony(
    img,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a amet quia doloremque, dolor voluptas minus ",
    "Yassin Ga"
  )
);
