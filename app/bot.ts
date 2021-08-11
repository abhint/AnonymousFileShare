import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

if (process.env.BOT_TOKEN == undefined) {
  console.log(".env BOT_TOKEN must be provided!");
}

const bot: Telegraf = new Telegraf(String(process.env.BOT_TOKEN));

export default bot;
