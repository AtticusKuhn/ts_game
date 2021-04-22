//@ts-ignore
import { set_up_level, levels } from "./levels.ts";

const main = (): void => {
  const lvl1 = levels[0];
  console.log({ lvl1 });
  set_up_level(lvl1);
};

main();
//stuff
