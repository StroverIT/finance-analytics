import { ObjectId } from "mongoose";

export enum FinanceTypeEnum {
  INCOME = "income",
  EXPENSE = "expense",
}

export type FinanceSchemaType = {
  userId: string;

  price: number;
  article: string;
  account: ObjectId;
  category: ObjectId;

  type: FinanceTypeEnum;

  createdAt: string;
};
