import { add_points } from "./math";
import { point, state } from "./types";
import { levels } from "./levels/levels";
let state: state = {
  player_position: { x: 0, y: 0 },
  current_level: levels[0],
  movement: {
    up: "still",
    right: "still",
  },
};
export const merge_state = (s: Partial<state>) => set_state({ ...state, ...s });
export const set_state = (s: state) => (state = s);
export const get_state = () => state;
export const set_player_position = (pt: point): state =>
  Object.assign(state, { player_position: pt });
export const move_player = (pt: point): state =>
  set_player_position(add_points(state.player_position, pt));
