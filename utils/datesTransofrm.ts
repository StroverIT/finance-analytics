export const getWeekTitle = (index: number, month: number) => {
  switch (index) {
    case 0:
      return `1 до 7 ${months[month]}`;
    case 1:
      return `8 до 14 ${months[month]}`;
    case 2:
      return `15 до 21 ${months[month]}`;
    case 3:
      return `22 до 31 ${months[month]}`;
  }
};

const months = [
  "януари",
  "февруари",
  "март",
  "април",
  "май",
  "юни",
  "юли",
  "август",
  "септември",
  "октомври",
  "ноември",
  "декември",
];
