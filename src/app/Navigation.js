export class Navigation {
  static logCreator(imgSource) {
    const img = new Image();
    img.src = imgSource;
    img.classList.add("nav__logo");
    img.alt = "restaurant logo image";
    return img;
  }
  // data = ["home","menu","contact"]
  static buttonCreator(data) {
    const buttons = [];
    data.forEach((val) => {
      const button = document.createElement("button");
      button.classList.add("nav__button");
      button.setAttribute("id", val);
      button.textContent = val;
      buttons.push(button);
    });
    return buttons;
  }
}
