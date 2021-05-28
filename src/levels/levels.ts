import {
  add_points,
  divide,
  exponentiaite_point,
  from_array,
  multiply,
  scale_point,
} from "../math";
import { level, mapping } from "../types";
const identity_map: mapping = (pt) => from_array([pt.x * 4, pt.y * 4]);
const square_mapping: mapping = ({ x, y }) => {
  return { x: (x ** 2 - y ** 2) / 20, y: (2 * x * y) / 20 };
};
const inverse_mapping: mapping = ({ x, y }) => {
  let d = x ** 2 + y ** 2;
  return scale_point(from_array([x / d, -y / d]), 10000);
};
const sqrt_mapping: mapping = (pt) =>
  add_points(
    scale_point(exponentiaite_point(pt, 0.5), 50),
    from_array([-500, 0])
  );

const rotational_mapping: mapping = ({ x, y }) =>
  scale_point(from_array([y, -x]), 20);
const d_mapping: mapping = (z) =>
  scale_point(
    divide(
      add_points(from_array([0, 1]), multiply(z, from_array([-1, 0]))),
      add_points(from_array([0, 1]), z)
    ),
    200
  );
export const levels: level[] = [
  {
    name: "square mapping",
    equation: "z→z^2",
    map: square_mapping,
  },
  {
    name: "identity mapping",
    equation: "z→z",
    map: identity_map,
  },
  {
    name: "inverse mapping",
    equation: "z→1/z",
    map: inverse_mapping,
    starting_position: { x: 0, y: -49 },
  },
  {
    name: "sqrt mapping",
    equation: "z→sqrt(z)",
    map: sqrt_mapping,
  },
  {
    name: "rotational mappng",
    equation: "z→iz",
    map: rotational_mapping,
  },
  {
    name: "idk what this is called mappng",
    equation: "z→i(i-z)/(i+z)",
    map: d_mapping,
  },
];
