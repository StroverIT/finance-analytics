import { ObjectId } from "mongoose";

export enum FinanceTypeEnum {
  INCOME = "income",
  EXPENSE = "expense",
}

export type ArticleType = {
  price: string;
  article: string;
};

export interface FinanceSchemaType extends ArticleType {
  userId: string;

  billImage?: string;
  article: string;
  accountBalance: ObjectId;
  category: ObjectId;

  type: FinanceTypeEnum;

  createdAt: string;
}
