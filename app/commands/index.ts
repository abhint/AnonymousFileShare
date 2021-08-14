import bot from "../bot";
import { onStart } from "./start";
import { onHelp } from "./help";
import { onPing } from "./ping";
import { Composer } from "telegraf";

export const onCommands = async () => {
  bot.use(Composer.privateChat(onStart));
  bot.use(Composer.privateChat(onHelp));
  bot.use(Composer.privateChat(onPing));
};
