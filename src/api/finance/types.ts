import { FinancePopulatedType } from "../../db/models/Finance/types";

type MessageType = {
  message: string;
};

type ErrorType = {
  error: string;
};

export type FinanceResponseCreate = MessageType | ErrorType;

export type FinanceGetAll = {
  totalIncome: number;
  moneyLeftPerDay: number;
};

export type WeeksType = {
  week1: FinancePopulatedType[];
  week2: FinancePopulatedType[];
  week3: FinancePopulatedType[];
  week4: FinancePopulatedType[];
};

export type FinancesGetMonthlyTransactionsResponse = WeeksType;
