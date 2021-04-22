export interface level {
  map: mapping;
}
export interface point {
  x: Number;
  y: Number;
}
export type mapping = (pt: point) => point;
