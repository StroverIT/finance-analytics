import { ObjectId } from "mongoose";
import { AccountBalanceSchemaType } from "../AccountBalance/types";
import { CategorySchemaType } from "../Category/types";

export enum FinanceTypeEnum {
  INCOME = "income",
  EXPENSE = "expense",
}

export type ArticleType = {
  price: number;
  article: string;
};

export interface FinanceSchemaType extends ArticleType {
  userId: string;

  billImage?: string;
  article: string;
  accountBalance: ObjectId;
  category: ObjectId;

  type: FinanceTypeEnum;

  createdAt: Date;
  _id: ObjectId;
}

export type FinancePopulatedType = Omit<
  FinanceSchemaType,
  "accountBalance" | "category"
> & {
  accountBalance: AccountBalanceSchemaType;
  category: CategorySchemaType;
};

export type GetRecentTransactionsResponse = FinancePopulatedType[];
