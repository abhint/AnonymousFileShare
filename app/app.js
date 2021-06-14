import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

if (process.env.BOT_TOKEN === undefined) {
  console.log("BOT_TOKEN must be provided!");
}

const bot = new Telegraf(process.env.BOT_TOKEN);

const start_keyboard = {
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [{ text: "Developer", url: "https://t.me/thankappan369" }],
      [
        {
          text: "Source",
          url: "https://github.com/AbhijithNT/AnonymousFileShare/",
        },
      ],
    ],
  },
};

const option = {
  parse_mode: "HTML",
};

bot.start((msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    `Hi <b>${msg.message.from.username}</b> !`,
    start_keyboard
  );
});

bot.command("ping", async (msg) => {
  const start = Date.now();
  let m = await bot.telegram.sendMessage(
    msg.chat.id,
    `ping: <code>0ms</code>`,
    option
  );

  await bot.telegram.editMessageText(
    msg.chat.id,
    m.message_id,
    undefined,
    `ping: <code>${(Date.now() - start) / 1000}ms</code>`,
    option
  );
});

bot.on("text", (msg) => {
  if (msg.message.reply_markup) {
    msg.telegram.sendMessage(msg.chat.id, msg.message.text);
    msg.telegram.sendMessage(msg.chat.id, msg.message.text, {
      entities: msg.message.entities,
      reply_markup: msg.message.reply_markup,
    });
  } else {
    msg.telegram.sendMessage(msg.chat.id, msg.message.text, {
      entities: msg.message.entities,
    });
  }
});

bot.on("video", (msg) => {
  bot.telegram.sendVideo(msg.chat.id, msg.message.video.file_id);
});

bot.on("photo", (msg) => {
  bot.telegram.sendPhoto(
    msg.chat.id,
    msg.message.photo[msg.message.photo.length - 1].file_id
  );
});

bot.on("document", (msg) => {
  bot.telegram.sendDocument(msg.chat.id, msg.message.document.file_id);
});

bot.on("audio", (msg) => {
  bot.telegram.sendAudio(msg.chat.id, msg.message.audio.file_id);
});

bot.on("voice", (msg) => {
  console.log(msg.message.voice.file_id);
  bot.telegram.sendVoice(msg.chat.id, msg.message.voice.file_id);
});

bot.on("location", (msg) => {
  bot.telegram.sendLocation(
    msg.chat.id,
    msg.message.location.latitude,
    msg.message.location.longitude
  );
});

bot.launch({
  webhook: {
    domain: process.env.URL,
    port: process.env.PORT,
  },
});

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
