import { set_player_position } from "./state";
import config from "./config";
import {
  add_points,
  divide,
  exponentiaite_point,
  from_array,
  multiply,
  scale_point,
} from "./math";
import { level, mapping, point } from "./types";
import { cartesian_product_map, set_map, step_range } from "./utils";
const identity_map: mapping = (pt) => from_array([pt.x * 4, pt.y * 4]);
const square_mapping: mapping = ({ x, y }) => {
  return { x: (x ** 2 - y ** 2) / 20, y: (2 * x * y) / 20 };
};
const inverse_mapping: mapping = ({ x, y }) => {
  let d = x ** 2 + y ** 2;
  return scale_point(from_array([x / d, -y / d]), 10000);
};
const sqrt_mapping: mapping = (pt) =>
  add_points(
    scale_point(exponentiaite_point(pt, 0.5), 50),
    from_array([-500, 0])
  );

const rotational_mapping: mapping = ({ x, y }) =>
  scale_point(from_array([y, -x]), 20);
const d_mapping: mapping = (z) =>
  scale_point(
    divide(
      add_points(from_array([0, 1]), multiply(z, from_array([-1, 0]))),
      add_points(from_array([0, 1]), z)
    ),
    200
  );
export const levels: level[] = [
  {
    name: "square mapping",
    equation: "z→z^2",
    map: square_mapping,
  },
  {
    name: "identity mapping",
    equation: "z→z",
    map: identity_map,
  },
  {
    name: "inverse mapping",
    equation: "z→1/z",
    map: inverse_mapping,
    starting_position: { x: 0, y: -49 },
  },
  {
    name: "sqrt mapping",
    equation: "z→sqrt(z)",
    map: sqrt_mapping,
  },
  {
    name: "rotational mappng",
    equation: "z→iz",
    map: rotational_mapping,
  },
  {
    name: "idk what this is called mappng",
    equation: "z→i(i-z)/(i+z)",
    map: d_mapping,
  },
];

const make_preimage = (bound: number, step: number): Set<point> => {
  const range = step_range(-bound, bound, step);
  return new Set(
    cartesian_product_map(range as [number], range as [number], (x, y) =>
      from_array([x, y])
    )
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
  let container = document.getElementById("container");
  container = set_up_canvas(lvl, container as HTMLDivElement);
};

export const set_up_canvas = (
  lvl: level,
  container: HTMLDivElement
): HTMLDivElement => {
  container.innerHTML = "";
  let canvas = document.createElement("CANVAS") as HTMLCanvasElement;
  const simHeight = window.innerHeight;
  const simWidth = window.innerWidth;
  const ctx = canvas.getContext("2d");
  if (!ctx) return container;
  ctx.canvas.height = simHeight;
  ctx.canvas.width = simWidth;
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
