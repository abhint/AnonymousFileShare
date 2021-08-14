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
import { Composer } from "telegraf";

export const onMain = () => {
  bot.use(Composer.privateChat(onText));
  bot.use(Composer.privateChat(onPhoto));
  bot.use(Composer.privateChat(onVideo));
  bot.use(Composer.privateChat(onDocument));
  bot.use(Composer.privateChat(onAudio));
  bot.use(Composer.privateChat(onLocation));
  bot.use(Composer.privateChat(onSticker));
  bot.use(Composer.privateChat(onVoice));
};
