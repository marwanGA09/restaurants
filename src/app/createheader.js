import { Navigation } from "./Navigation";
import logImg from "./../imgs/logo.png";

export const log = Navigation.logCreator(logImg);
export const buttons = Navigation.buttonCreator(["home", "menu", "contact"]);
