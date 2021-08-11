import { Composer } from "telegraf";

export const onText = Composer.on("text", async (msg) => {
  if (msg.message.reply_markup) {
    await msg.telegram.sendMessage(msg.chat.id, msg.message.text);
    await msg.telegram.sendMessage(msg.chat.id, msg.message.text, {
      entities: msg.message.entities,
      reply_markup: msg.message.reply_markup,
    });
  } else {
    await msg.telegram.sendMessage(msg.chat.id, msg.message.text, {
      entities: msg.message.entities,
    });
  }
});

export const onVideo = Composer.on("video", async (msg) => {
  await msg.telegram.sendVideo(msg.chat.id, msg.message.video.file_id);
});

export const onPhoto = Composer.on("photo", async (msg) => {
  await msg.telegram.sendPhoto(
    msg.chat.id,
    msg.message.photo[msg.message.photo.length - 1].file_id
  );
});
