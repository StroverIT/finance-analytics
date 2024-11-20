import { ObjectId } from "mongoose";

export type AccountBalanceSchemaType = {
  account: ObjectId;
  balance: number;

  _id: ObjectId;
  createdAt: string;
};
