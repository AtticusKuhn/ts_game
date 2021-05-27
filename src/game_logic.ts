import config from "./config";
import { get_state, merge_state, move_player } from "./index";
import { drawCanvas, get_canvas, get_origin } from "./levels";
import { scale_point } from "./math";
import { movement, point } from "./types";
const make_movement = (movement: movement): point => {
  let x = 0;
  let y = 0;
  const { up, right } = movement;
  if (up === "backward") x -= 1;
  if (up === "forward") x += 1;
  if (right === "backward") x -= 1;
  if (up === "forward") x += 1;
  return { x, y };
};
const key_to_direction = (key: string): movement => {
  switch (key) {
    case "ArrowUp":
      return { right: "still", up: "forward" };
    case "ArrowDown":
      return { right: "still", up: "backward" };
    case "ArrowLeft":
      return { right: "backward", up: "still" };
    case "ArrowRight":
      return { right: "forward", up: "still" };
    default:
      return { right: "still", up: "still" };
  }
};

export const game_loop = (): void => {
  setInterval(() => {
    let state = get_state();
    let canvas = get_canvas();
    move_player(
      scale_point(make_movement(state.movement), config.player.speed)
    );
    drawCanvas(
      state.current_level.map,
      canvas,
      get_origin(canvas.getContext("2d") as CanvasRenderingContext2D),
      state.player_position
    );
  }, config.game.update_speed);
};
export const add_controls = (): void => {
  console.log("add_controls");
  window.onkeydown = (e: KeyboardEvent) => {
    if (new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]).has(e.key))
      e.preventDefault();
    merge_state({ movement: key_to_direction(e.key) });
  };
  window.onkeyup = (_e: KeyboardEvent) =>
    merge_state({ movement: { right: "still", up: "still" } });
};
