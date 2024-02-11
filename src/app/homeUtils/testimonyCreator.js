import img from "./../../imgs/shiro.jpg";
import { cardCreatorTestimony } from "./card.creator";
export const testimony = document.createElement("div");
testimony.classList.add("testimony");

testimony.appendChild(
  cardCreatorTestimony(
    img,
    "Addis Spice transported me to Ethiopia right here in [City/Town]. The aroma of the spices, the warmth of the injera, and the friendly staff made dining here an unforgettable experience!",
    "Yassin Gabon"
  )
);
testimony.appendChild(
  cardCreatorTestimony(
    img,
    "As someone who's never tried Ethiopian food before, Addis Spice blew me away! The flavors were bold, the injera was perfect, and the atmosphere felt like a true Ethiopian gathering. Can't wait to come back!",
    "Thomson mark"
  )
);
testimony.appendChild(
  cardCreatorTestimony(
    img,
    "Addis Spice is a gem in [City/Town]. The authenticity of the cuisine paired with the welcoming ambiance made me feel like I was back in Ethiopia. Highly recommend for anyone craving a taste of Ethiopia!",
    "Angelina "
  )
);
