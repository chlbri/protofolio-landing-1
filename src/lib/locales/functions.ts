export function concat(...jsons: Record<string, any>[]) {
  return jsons.reduce((prev, next) => {
    prev = { ...prev, ...next };
    return prev;
  });
}
