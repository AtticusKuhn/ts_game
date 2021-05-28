import { add_controls, game_loop } from "./game_logic";
import { add_html_listeners } from "./html_controls";
import { set_up_level } from "./levels";
import { get_state } from "./state";

const main = (): void => {
  let state = get_state();
  set_up_level(state.current_level);
  add_html_listeners();
  add_controls();
  game_loop();
};

main();
