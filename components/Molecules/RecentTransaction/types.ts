import { FinancePopulatedType } from "@/API/finance/types";

export type RecentTransactionType = {
  item: FinancePopulatedType;
  className?: string;
};
