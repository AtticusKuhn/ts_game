//@ts-ignore
import { set_up_level, levels } from "./levels.ts";
import { point, state } from "./types";
import { addPoints } from "./math";

let state: state = {
  player_position: { x: 0, y: 0 },
  current_level: levels[0],
  movement: {
    up: "forward",
    right: "still",
  },
};
export const set_state = (s: state) => {
  state = s;
  return state;
};
export const get_state = () => state;
export const set_player_position = (pt: point): state => {
  state.player_position = pt;
  return state;
};

export const move_player = (pt: point): state => {
  state.player_position = addPoints(state.player_position, pt);
  return state;
};

const main = (): void => {
  const lvl1 = levels[0];
  console.log({ lvl1 });
  set_up_level(lvl1);
};

main();
//stuff
