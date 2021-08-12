import { Composer } from "telegraf";

export const onHelp = Composer.command("help", async (msg) => {
  msg.reply("@thankappan369");
});
