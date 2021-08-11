import { onStart } from "./start";
import { onHelp } from "./help";
import bot from "../bot";

export const onCommands = async () => {
  bot.use(onStart);
  bot.use(onHelp);
};
