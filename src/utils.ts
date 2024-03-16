export function pad(n: string, digits: number) {
  n += "";
  return new Array(digits - n.length + 1).join("0") + n;
}
