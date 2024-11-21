type MessageType = {
  message: string;
};

type ErrorType = {
  error: string;
};

export type FinanceResponseCreate = MessageType | ErrorType;

export type FinanceGetAll = {
  difference: number;
  totalIncome: number;
  totalExpense: number;
  moneyLeftPerDay: number;
  differenceInPercentage: number;
};
