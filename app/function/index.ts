import bot from "../bot";
import { onText, onPhoto, onVideo } from "./main";

export const onMain = () => {
  bot.use(onText);
  bot.use(onPhoto);
  bot.use(onVideo);
};
