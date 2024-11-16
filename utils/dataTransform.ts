export const months = [
  "Януари",
  "Февруари",
  "Март",
  "Април",
  "Май",
  "Юни",
  "Юли",
  "Август",
  "Септември",
  "Октомври",
  "Ноември",
  "Декември",
];

export const dataToDropDown = (array: string[]) =>
  array.map((month, index) => ({
    label: month,
    value: index.toString(),
  }));
