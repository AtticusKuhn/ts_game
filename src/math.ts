import { point, polar } from "./types";

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

export const rectangular_to_polar = (pt: point): polar => {
  return {
    r: Math.sqrt(pt.x ** 2 + pt.y ** 2),
    theta: Math.atan(pt.y / pt.x),
  };
};
export const polar_to_rectangular = (pol: polar): point =>
  from_array([pol.r * Math.cos(pol.theta), pol.r * Math.sin(pol.theta)]);

export const show = (p: point) =>
  p.y > 0 ? `${p.x}+${p.y}i` : `${p.x}${p.y}i`;
export const showp = (p: point) => console.log(show(p));
