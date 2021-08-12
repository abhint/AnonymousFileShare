import { Composer } from "telegraf";

export const onPing = Composer.command("ping", async (msg) => {
  await msg.telegram.sendMessage(msg.chat.id, "pong!");
});
