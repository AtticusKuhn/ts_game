import { merge_state } from "./state";
import { levels } from "./levels/levels";
import { set_up_level } from "./levels/draw_canvas";
import { level } from "./types";

function appendLevels(
  lvls: level[],
  selector: HTMLSelectElement
): HTMLSelectElement {
  for (const l of lvls) {
    const option = document.createElement("option") as HTMLOptionElement;
    option.value = l.name;
    option.innerText = l.name;
    selector.appendChild(option);
  }
  return selector;
}

export function add_html_listeners(): void {
  const selector = appendLevels(
    levels,
    document.querySelector("#mapping_selector") as HTMLSelectElement
  );
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
