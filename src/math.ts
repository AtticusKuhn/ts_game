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

export const multiply = (pt1: point, pt2: point): point =>
  from_array([pt1.x * pt2.x - pt1.y * pt2.y, pt1.x * pt2.y + pt1.y * pt2.x]);

export const conjugate = (pt: point) => from_array([pt.x, -pt.y]);
export const divide = (pt1: point, pt2: point): point =>
  scale_point(multiply(pt1, conjugate(pt2)), 1 / (pt2.x ** 2 - pt2.y ** 2));
