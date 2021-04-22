import { point } from "./types";

export const toArray = (pt: point): [number, number] => [pt.x, pt.y];

export const fromArray = ([x, y]): point => {
  return {
    x,
    y,
  };
};
export const addPoints = (pt1: point, pt2: point): point =>
  fromArray([pt1.x + pt2.x, pt1.y + pt2.y]);
