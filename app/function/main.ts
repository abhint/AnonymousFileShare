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

export const onDocument = Composer.on("document", async (msg) => {
  await msg.telegram.sendDocument(msg.chat.id, msg.message.document.file_id);
});

export const onAudio = Composer.on("audio", async (msg) => {
  await msg.telegram.sendAudio(msg.chat.id, msg.message.audio.file_id);
});

export const onVoice = Composer.on("voice", async (msg) => {
  await msg.telegram.sendVoice(msg.chat.id, msg.message.voice.file_id);
});

export const onLocation = Composer.on("location", async (msg) => {
  await msg.telegram.sendLocation(
    msg.chat.id,
    msg.message.location.latitude,
    msg.message.location.longitude
  );
});

export const onSticker = Composer.on("sticker", async (msg) => {
  await msg.telegram.sendSticker(msg.chat.id, msg.message.sticker.file_id);
});
