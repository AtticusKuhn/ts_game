import { point } from "./types";

export const to_array = (pt: point): [number, number] => [pt.x, pt.y];

export const from_array = ([x, y]): point => {
  return {
    x,
    y,
  };
};
export const add_points = (pt1: point, pt2: point): point =>
  from_array([pt1.x + pt2.x, pt1.y + pt2.y]);

export const scale_point = (pt: point, scale: number): point =>
  from_array([pt.x * scale, pt.y * scale]);
