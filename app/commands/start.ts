import { Composer } from "telegraf";

export const onStart = Composer.command("start", async (msg) => {
  msg.reply("Hello World!");
});
