import { Composer } from "telegraf";
import { onText } from "./messages";
export const onStart = Composer.command("start", async (msg) => {
  msg.telegram.sendMessage(
    msg.chat.id,
    `Hi <b>${msg.message.from.first_name.replace(/[<>/]/g, "")} !</b>${
      onText.start
    }`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Developer", url: "tg://user?id=429320566" }],
          [
            {
              text: "Source",
              url: "https://github.com/AbhijithNT/AnonymousFileShare/",
            },
          ],
        ],
      },
    }
  );
});
