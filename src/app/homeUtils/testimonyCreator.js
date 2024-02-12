import { cardCreatorTestimony } from "./card.creator";
export const testimony = document.createElement("div");
testimony.classList.add("testimony");

import man1 from "./../../imgs/man1.jpg";
import man2 from "./../../imgs/man2.jpg";
import girl1 from "./../../imgs/girl1.jpeg";

testimony.appendChild(
  cardCreatorTestimony(
    man1,
    "Addis Spice transported me to Ethiopia right here in Addis Ababa. The aroma of the spices, the warmth of the injera, and the friendly staff made dining here an unforgettable experience!",
    "Yassin Gabon"
  )
);
testimony.appendChild(
  cardCreatorTestimony(
    man2,
    "As someone who's never tried Ethiopian food before, Addis Spice blew me away! The flavors were bold, the injera was perfect, and the atmosphere felt like a true Ethiopian gathering. Can't wait to come back!",
    "Thomson mark"
  )
);
testimony.appendChild(
  cardCreatorTestimony(
    girl1,
    "Addis Spice is a gem in Addis Ababa. The authenticity of the cuisine paired with the welcoming ambiance made me feel like I was back in Ethiopia. Highly recommend for anyone craving a taste of Ethiopia!",
    "Angelina "
  )
);
