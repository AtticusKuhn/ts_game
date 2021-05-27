export interface level {
  map: mapping;
  name: string;
  equation: string;
  starting_position?: point;
}
export interface point {
  x: number;
  y: number;
}
export type mapping = (pt: point) => point;

export type direction = "forward" | "backward" | "still";
export interface movement {
  up: direction;
  right: direction;
}

export interface state {
  player_position: point;
  current_level: level;
  movement: movement;
}
export interface polar {
  r: number;
  theta: number;
}
