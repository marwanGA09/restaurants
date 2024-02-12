import { contentCreator } from "../content.creator";
export const homeContainer = document.createElement("div");
homeContainer.classList.add("home");
const homeHeading = contentCreator(
  "Welcome to Addis Spice",
  "h1",
  "home__heading"
);
const homeSubHeading = contentCreator(
  "Your Ethiopian Culinary Journey!",
  "h2",
  "home__sub-heading"
);
const homeIntro = contentCreator(
  "Addis Spice brings the rich flavors and vibrant culture of Ethiopia to Addis Ababa. Our restaurant is a celebration of traditional Ethiopian cuisine, where authentic recipes and warm hospitality come together to create a memorable dining experience. Whether you're new to Ethiopian food or a seasoned enthusiast, we invite you to join us on a culinary journey through the flavors of Ethiopia.",
  "p",
  "home__intro"
);
homeContainer.appendChild(homeHeading);
homeContainer.appendChild(homeSubHeading);
homeContainer.appendChild(homeIntro);

import img from "./../../imgs/shiro.jpg";
import { cardCreator } from "./card.creator";

export const featureContainer = document.createElement("div");
featureContainer.classList.add("feature");
featureContainer.appendChild(
  cardCreator(
    img,
    "Addis Spice - Authentic Ethiopian Cuisine",
    "At Addis Spice, we are committed to providing an authentic Ethiopian dining experience that transports our guests to the vibrant streets of Addis Ababa. Our restaurant is more than just a place to eat; it's a celebration of Ethiopian culture, flavors, and hospitality."
  )
);
featureContainer.appendChild(
  cardCreator(
    img,
    "Rich Cultural Experience",
    "We offer more than just delicious food; we provide a rich cultural experience. From the traditional Ethiopian music playing in the background to the authentic decor adorning our walls, every aspect of our restaurant immerses guests in the vibrant culture of Ethiopia"
  )
);

featureContainer.appendChild(
  cardCreator(
    img,
    "Family Atmosphere",
    "Our restaurant is a place where families come together to share meals and create memories. We believe in the importance of fostering a warm and welcoming atmosphere where guests feel like part of our extended family. Whether you're dining with loved ones or enjoying a meal alone, you'll always feel at home at Addis Spice."
  )
);
