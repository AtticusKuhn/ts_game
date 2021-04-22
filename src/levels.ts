//@ts-ignore
import { toArray } from "./math.ts";
import { level, mapping, point } from "./types";

const identity_map: mapping = (pt) => pt;
const square_mapping: mapping = ({ x, y }) => {
  return { x: x ** 2 - y ** 2, y: 2 * x * y };
};

export const levels: [level] = [
  {
    map: square_mapping,
  },
];
const drawCanvas = (
  map: mapping,
  canvas: HTMLCanvasElement
): HTMLCanvasElement => {
  let ctx = canvas.getContext("2d");
  if (!ctx) throw "this error shouldn't happen";
  for (let x = 0; x < 1000; x += 10) {
    for (let y = 0; y < 1000; y += 10) {
      const [x2, y2] = toArray(map({ x, y }));
      console.log({ x2, y2 });
      ctx.fillRect(x2, y2, 1, 1);
      console.log("drawing");
    }
  }
  return canvas;
};

export const set_up_level = (lvl: level): void => {
  const container = document.getElementById("container");
  if (!container) throw "cannot find container";
  container.innerHTML = "";
  let canvas = drawCanvas(
    lvl.map,
    document.createElement("CANVAS") as HTMLCanvasElement
  );
  let ctx = canvas.getContext("2d");
  // canvas.width = 200;
  // canvas.height = 200;
  const simHeight = window.innerHeight * 2;
  const simWidth = window.innerWidth * 2;

  // SimCanvas.clearRect(0, 0, SimWidth, SimHeight);
  // ControlCanvas.clearRect(0, 0, SimWidth, SimHeight);

  // ctx.canvas.height = simHeight;
  // ctx.canvas.width = simWidth;
  container.appendChild(canvas);
};
