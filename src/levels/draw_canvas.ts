import config from "../config";
import { add_points, from_array } from "../math";
import { set_player_position } from "../state";
import { level, mapping, point } from "../types";
import { cartesian_product_map, set_map, step_range } from "../utils";
const make_preimage = (bound: number, step: number): Set<point> => {
  const range = step_range(-bound, bound, step) as [number];
  return new Set(
    cartesian_product_map(range, range, (x, y) => from_array([x, y]))
  );
};
export const draw_level_on_canvas = (
  map: mapping,
  canvas: HTMLCanvasElement,
  origin: point,
  player_position: point
): HTMLCanvasElement => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const pre_image = make_preimage(
    config.game.dots_per_level,
    config.game.dot_spacing
  );
  const shifted_map = (pt: point): point => add_points(origin, map(pt));
  const image = set_map(pre_image, shifted_map);
  image.forEach((pt) =>
    ctx.fillRect(pt.x, pt.y, config.dot.height, config.dot.width)
  );
  const mapped_player: point = add_points(map(player_position), origin);
  ctx.fillStyle = config.colors.red;
  ctx.fillRect(
    mapped_player.x,
    mapped_player.y,
    config.player.height,
    config.player.width
  );
  ctx.fillStyle = config.colors.black;
  return canvas;
};

export const set_up_level = (lvl: level): void => {
  let container = document.getElementById("container") as HTMLDivElement;
  container = set_up_canvas(lvl, container);
};

export const set_up_canvas = (
  lvl: level,
  container: HTMLDivElement
): HTMLDivElement => {
  container.innerHTML = "";
  const canvas = document.createElement("CANVAS") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  if (!ctx) return container;
  ctx.canvas.height = window.innerHeight;
  ctx.canvas.width = window.innerWidth;
  const origin = get_origin(ctx);
  const player_pos = lvl.starting_position || from_array([0, 0]);
  const drawnCanvas = draw_level_on_canvas(lvl.map, canvas, origin, player_pos);
  set_player_position(player_pos);
  container.appendChild(drawnCanvas);
  return container;
};
export const get_canvas = (): HTMLCanvasElement =>
  document.querySelector("#container > canvas") as HTMLCanvasElement;
export const get_origin = (ctx: CanvasRenderingContext2D): point =>
  from_array([ctx.canvas.width / 2, ctx.canvas.height / 2]);
