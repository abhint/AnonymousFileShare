import bot from "../bot";
import {
  onText,
  onPhoto,
  onVideo,
  onAudio,
  onDocument,
  onLocation,
  onSticker,
  onVoice,
} from "./main";

export const onMain = () => {
  bot.use(onText);
  bot.use(onPhoto);
  bot.use(onVideo);
  bot.use(onDocument);
  bot.use(onAudio);
  bot.use(onLocation);
  bot.use(onSticker);
  bot.use(onVoice);
};
