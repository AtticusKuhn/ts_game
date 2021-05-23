import { get_state, merge_state, move_player } from "./index";
import { from_array } from "./math";
import { drawCanvas, get_canvas, get_origin } from "./levels";
export const game_loop = (): void => {
  setInterval(() => {
    let state = get_state();
    let canvas = get_canvas();
    if (state.movement.right === "still" && state.movement.up === "still")
      return;
    if (state.movement.right === "forward") move_player(from_array([2, 0]));
    if (state.movement.right === "backward") move_player(from_array([-2, 0]));
    if (state.movement.up === "forward") move_player(from_array([0, -2]));
    if (state.movement.up === "backward") move_player(from_array([0, 2]));
    drawCanvas(
      state.current_level.map,
      canvas,
      get_origin(canvas.getContext("2d") as CanvasRenderingContext2D),
      state.player_position
    );
  }, 110);
};
export const add_controls = (): void => {
  console.log("add_controls");
  window.onkeydown = (e: KeyboardEvent) => {
    // const state = get_state();
    // console.log(state);
    // console.log(e.key);
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.key) > -1)
      e.preventDefault();
    if (e.key === "ArrowUp")
      merge_state({ movement: { up: "forward", right: "still" } });
    if (e.key === "ArrowDown")
      merge_state({ movement: { up: "backward", right: "still" } });
    if (e.key === "ArrowLeft")
      merge_state({ movement: { right: "backward", up: "still" } });
    if (e.key === "ArrowRight")
      merge_state({ movement: { right: "forward", up: "still" } });
    //  if(e.key)
  };
  window.onkeyup = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp")
      merge_state({ movement: { up: "still", right: "still" } });
    if (e.key === "ArrowDown")
      merge_state({ movement: { up: "still", right: "still" } });
    if (e.key === "ArrowLeft")
      merge_state({ movement: { right: "still", up: "still" } });
    if (e.key === "ArrowRight")
      merge_state({ movement: { right: "still", up: "still" } });
    // keys[e.key] = false;
  };
};
