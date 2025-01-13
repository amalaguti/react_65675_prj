export function calcCost(type) {
  switch (type) {
    case "standard":
      return 1;
    case "priority":
      return 2.5;
    case "disposable":
      return 0.5;
    default:
      return 0;
  }
}