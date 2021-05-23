import { merge_state } from ".";
import { levels, set_up_level } from "./levels";

export function add_html_listeners(): void {
  const selector = document.querySelector(
    "#mapping_selector"
  ) as HTMLSelectElement;
  for (const l of levels) {
    const option = document.createElement("option") as HTMLOptionElement;
    option.value = l.name;
    option.innerText = l.name;
    selector.appendChild(option);
  }
  display_info(selector.value);
  selector.addEventListener("change", (_e) => {
    display_info(selector.value);
    const new_lvl = levels.find((l) => l.name === selector.value);
    if (!new_lvl) return;
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
