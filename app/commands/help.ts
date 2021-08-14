import { Composer } from "telegraf";
import { onText } from "./messages";

export const onHelp = Composer.command("help", async (msg) => {
  msg.telegram.sendMessage(msg.chat.id,`${onText.help}`);
});
