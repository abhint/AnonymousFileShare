import bot from "./app/bot";
import { onCommands } from "./app/commands/index";

(async () => {
  onCommands();
  await bot.launch()
})();

