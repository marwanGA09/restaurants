import { createMenuCard } from "./createMenu";
import img from "./../../imgs/shiro.jpg";

export const menuContainer = document.createElement("div");
menuContainer.classList.add("menu-container");

menuContainer.appendChild(
  createMenuCard(
    img,
    "Doro Wat",
    "Chicken, onions, berbere spice blend, garlic, ginger, butter, tomatoes, and boiled eggs",
    "A traditional Ethiopian dish featuring tender chicken stewed in a rich blend of spices, served with boiled eggs. A favorite for special occasions and gatherings.",
    "75"
  )
);

menuContainer.appendChild(
  createMenuCard(
    img,
    "Kitfo",
    "Finely minced raw beef, spiced clarified butter, mitmita (spice blend), and cottage cheese.",
    "Kitfo is a beloved Ethiopian delicacy consisting of finely minced raw beef, seasoned with aromatic spices and clarified butter. Served with a side of cottage cheese, it offers a burst of flavor that delights the senses.",
    "65"
  )
);

menuContainer.appendChild(
  createMenuCard(
    img,
    "Shiro",
    "Roasted and ground chickpeas, onions, garlic, berbere spice blend, and tomatoes, mitmita (spice blend), and cottage cheese.",
    "Shiro is a flavorful Ethiopian stew made from roasted and ground chickpeas, simmered with onions, garlic, tomatoes, and a blend of aromatic spices. Its rich, hearty taste makes it a popular choice for vegetarians and meat-eaters alike..",
    "65"
  )
);
menuContainer.appendChild(
  createMenuCard(
    img,
    "Tibs",
    "Beef, lamb, or chicken sautéed with onions, peppers, garlic, and spices.",
    "Classic Ethiopian dish featuring tender meat (beef, lamb, or chicken) sautéed with onions, peppers, garlic, and a medley of spices. Bursting with flavor and served sizzling hot, it's a satisfying choice for any meal."
  )
);
