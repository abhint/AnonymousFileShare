import bot from "./app/bot";
import { onCommands } from "./app/commands/index";
import { onMain } from "./app/function/index";

(async () => {
  onCommands();
  onMain();
  await bot.launch();
})();
