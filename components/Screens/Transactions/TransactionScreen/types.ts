import { FinancePopulatedType } from "@/API/finance/types";

export type TransformedMonthlyTransactions = {
  _id: string;
  title: string;
  data: FinancePopulatedType[];
};
