export const interval = (n: number) => [...Array(Math.floor(n)).keys()];

export const range = (lower_bound: number, upper_bound: number): number[] =>
  interval(upper_bound - lower_bound).map((x) => x + lower_bound);

export const step_range = (
  lower_bound: number,
  upper_bound: number,
  step: number
): number[] =>
  interval((upper_bound - lower_bound) / step).map(
    (x) => x * step + lower_bound
  );

export function cartesian_product_map<T, P>(
  a: [T],
  b: [T],
  f: (a: T, b: T) => P
): P[] {
  // return [].flatMap;
  return a.flatMap((v) => b.map((w) => f(v, w)));
}

export function set_map<T, P>(s: Set<T>, f: (t: T) => P): Set<P> {
  return new Set([...s].map(f));
}
