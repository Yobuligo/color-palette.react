export const style = (...classNames: (string | undefined)[]): string => {
  return classNames.join(" ");
};
