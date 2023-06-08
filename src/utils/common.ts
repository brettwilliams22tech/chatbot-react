export const objStr = <T extends Record<string, boolean>>(obj: T): string => {
  return Object.keys(obj)
    .filter((k) => obj[k])
    .join(" ");
};

export const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "usd",
  notation: "compact",
});
