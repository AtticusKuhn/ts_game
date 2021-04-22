import { level, mapping, point } from "./types";

const identity_map: mapping = (pt) => pt;

export const levels: [level] = [
  {
    map: identity_map,
  },
];
const drawCanvas = (
  map: mapping,
  canvas: HTMLCanvasElement
): HTMLCanvasElement => {
  let ctx = canvas.getContext("2d");
  if (!ctx) throw "this error shouldn't happen";
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 100; y++) {
      ctx.fillRect(x, y, 1, 1);
    }
  }
  return canvas;
};

export const set_up_level = (lvl: level): void => {
  const container = document.getElementById("container");
  if (!container) throw "cannot find container";
  container.innerHTML = "";
  const canvas = drawCanvas(
    lvl.map,
    document.createElement("CANVAS") as HTMLCanvasElement
  );
};
