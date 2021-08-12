import bot from "./app/bot";
import * as dotenv from "dotenv";
import { onCommands } from "./app/commands/index";
import { onMain } from "./app/function/index";
dotenv.config();

(async () => {
  onCommands();
  onMain();
  await bot.launch({
    webhook: {
      domain: String(process.env.URL),
      port: Number(process.env.PORT),
    },
  });
})();

process.once("SIGINT", async () => bot.stop("SIGINT"));
process.once("SIGTERM", async () => bot.stop("SIGTERM"));
