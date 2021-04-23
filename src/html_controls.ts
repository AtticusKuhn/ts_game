import { merge_state } from ".";
import { levels, set_up_level } from "./levels";

export function add_html_listeners(): void {
  const selector = document.querySelector(
    "#mapping_selector"
  ) as HTMLSelectElement;
  display_info(selector.value);
  selector.addEventListener("change", (e) => {
    display_info(selector.value);
    const new_lvl = levels.find((l) => l.name === selector.value);
    merge_state({ current_level: new_lvl });
    set_up_level(new_lvl);
  });
}

function display_info(selection: string): void {
  console.log(selection);
  const lvl = levels.find((l) => l.name === selection);
  if (!lvl) throw "cannot find lvl";
  const display = document.getElementById("display") as HTMLDivElement;
  display.innerText = lvl.equation;
}
