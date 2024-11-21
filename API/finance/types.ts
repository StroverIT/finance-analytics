import { FinanceTypeEnum } from "@/components/Screens/Finances/types";
import { CategorySchemaType } from "../category/types";
import { AccountBalanceSchemaType } from "../account/types";

export type CreateFinanceDataType = {
  userId: string;
  article: string;
  price: string;
  categoryId: string;
  accountBalanceId: string;
  billImage?: string;
  type: string;
};

export type CreateFinanceType = (data: CreateFinanceDataType) => Promise<any>;

export type TransferDataType = {
  amount: string;
  from: string;
  to: string;
};

export type TransferType = (data: TransferDataType) => Promise<any>;

type TotalBudgetType = {
  difference: number;
  totalIncome: number;
  totalExpense: number;
  moneyLeftPerDay: number;
  differenceInPercentage: number;
};

export type GetTotalBudgetType = (userId: string) => Promise<TotalBudgetType>;

export type ArticleType = {
  price: number;
  article: string;
};

export interface FinanceSchemaType extends ArticleType {
  userId: string;

  billImage?: string;
  article: string;
  accountBalance: string;
  category: string;

  type: FinanceTypeEnum;

  createdAt: Date;
  _id: string;
}

export type FinancePopulatedType = Omit<
  FinanceSchemaType,
  "accountBalance" | "category"
> & {
  accountBalance: AccountBalanceSchemaType;
  category: CategorySchemaType;
};

export type RecentTransactionType = (
  userId: string
) => Promise<FinancePopulatedType[]>;
