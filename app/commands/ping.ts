import { Composer } from "telegraf";

export const onPing = Composer.command("ping", async (msg) => {
  let st: number = Date.now();
  let msg_id = await msg.telegram.sendMessage(msg.chat.id, `Pong!`);
  let ms: number = Date.now() - st;

  await msg.telegram.editMessageText(
    msg.chat.id,
    msg_id.message_id,
    undefined,
    `Pong! ${ms}ms`
  );
});
