export interface level {
  map: mapping;
}
export interface point {
  x: number;
  y: number;
}
export type mapping = (pt: point) => point;
