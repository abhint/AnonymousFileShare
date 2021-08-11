import bot from "../bot";
import { onStart } from "./start";
import { onHelp } from "./help";
import { onPing } from "./ping";

export const onCommands = async () => {
  bot.use(onStart);
  bot.use(onHelp);
  bot.use(onPing);
};
