import bot from "./app/bot";
import * as dotenv from "dotenv";
import botUse from "./app/index";
dotenv.config();

(async () => {
  await botUse();
  if (process.env.WEBHOOK_URL && process.env.PORT) {
    const webhook_url = String(process.env.WEBHOOK_URL);
    const port = Number(process.env.PORT);
    await bot
      .launch({
        webhook: {
          domain: webhook_url,
          port: port,
        },
      })
      .then(() =>
        console.log(
          `${bot.botInfo.first_name} is Online! 🚀 \nURL: ${webhook_url}\nPORT: ${port}`
        )
      );
  } else {
    bot
      .launch()
      .then(() => console.log(`${bot.botInfo.first_name} is Online! 🚀`));
  }
})();

process.once("SIGINT", async () => bot.stop("SIGINT"));
process.once("SIGTERM", async () => bot.stop("SIGTERM"));
