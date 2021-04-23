//@ts-ignore
import { get_state, move_player, set_player_position } from ".";
//@ts-ignore
import { toArray, fromArray, addPoints } from "./math.ts";
import { level, mapping, point } from "./types";
import { cartesian_product_map, range, set_map, step_range } from "./utils";
const identity_map: mapping = (pt) => pt;
const square_mapping: mapping = ({ x, y }) => {
  return { x: (x ** 2 - y ** 2) / 20, y: (2 * x * y) / 20 };
};
const inverse_mapping: mapping = ({ x, y }) => {
  let d = x ** 2 + y ** 2;
  return fromArray([x / d, -y / d]);
};
const test_mapping: mapping = ({ x, y }) => fromArray([x + y, y]);
export const levels: [level] = [
  {
    map: square_mapping,
  },
];

const make_preimage = (bound: number, step: number): Set<point> => {
  const len = Math.floor(bound / step);
  const x_range = step_range(-bound, bound, step);
  const y_range = step_range(-bound, bound, step);
  if (x_range.length === 0 || y_range.length === 0)
    throw "the range is empty and thiss shouldn't happen";
  return new Set(
    //@ts-ignore
    cartesian_product_map(x_range, y_range, (x, y) => fromArray([x, y]))
  );
};

const drawCanvas = (
  map: mapping,
  canvas: HTMLCanvasElement,
  origin: point,
  player_position: point
): HTMLCanvasElement => {
  let ctx = canvas.getContext("2d");
  if (!ctx) throw "this error shouldn't happen";
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const pre_image = make_preimage(100, 3);
  const shifted_map = (pt) => addPoints(origin, map(pt));
  const image = set_map(pre_image, shifted_map);
  console.log([...image]);
  // const image_shifted = set_map(image, (pt) =>
  //   fromArray([pt.x + origin.x, pt.y + origin.y])
  // );
  // console.log([...image]);
  image.forEach((pt) => {
    ctx.fillRect(pt.x, pt.y, 2, 2);
  });
  ctx.fillRect(player_position.x, player_position.y, 10, 10);
  return canvas;
};

export const set_up_level = (lvl: level): void => {
  const container = document.getElementById("container");
  if (!container) throw "cannot find container";
  container.innerHTML = "";
  let canvas = document.createElement("CANVAS") as HTMLCanvasElement;
  canvas = add_controls(canvas);
  const simHeight = window.innerHeight;
  const simWidth = window.innerWidth;
  let ctx = canvas.getContext("2d");
  ctx.canvas.height = simHeight;
  ctx.canvas.width = simWidth;
  const origin = fromArray([simWidth / 2, simHeight / 2]);
  let drawnCanvas = drawCanvas(lvl.map, canvas, origin, origin);
  set_player_position(origin);
  // canvas.width = 200;
  // canvas.height = 200;

  // SimCanvas.clearRect(0, 0, SimWidth, SimHeight);
  // ControlCanvas.clearRect(0, 0, SimWidth, SimHeight);

  container.appendChild(drawnCanvas);
  game_loop();
};
export const add_controls = (canvas: HTMLCanvasElement): HTMLCanvasElement => {
  console.log("add_controls");
  window.onkeydown = (e) => {
    console.log(e.key);
    //  if(e.key)
  };
  window.onkeyup = (e) => {
    // keys[e.key] = false;
  };
  return canvas;
};

const get_canvas = (): HTMLCanvasElement => {
  return document.querySelector("#container > canvas");
};
const get_origin = (canvas: HTMLCanvasElement): point => {
  const ctx = canvas.getContext("2d");
  return fromArray([ctx.canvas.width / 2, ctx.canvas.height / 2]);
};

const game_loop = (): void => {
  setInterval(() => {
    let state = get_state();
    let canvas = get_canvas();
    if (state.movement.right === "forward") move_player(fromArray([1, 0]));
    if (state.movement.right === "backward") move_player(fromArray([-1, 0]));
    if (state.movement.up === "forward") move_player(fromArray([0, 1]));
    if (state.movement.right === "backward") move_player(fromArray([0, -1]));
    drawCanvas(
      state.current_level.map,
      canvas,
      get_origin(canvas),
      state.player_position
    );
  }, 1e3);
};
