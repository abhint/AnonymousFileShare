import { onCommands } from "./commands/index";
import core_function from "./function/main";

async function botUse() {
  onCommands();
  core_function();
}

export default botUse;
