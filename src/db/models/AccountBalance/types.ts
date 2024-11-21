import { ObjectId } from "mongoose";

export type AccountBalanceSchemaType = {
  name: string;
  icon: string;
  balance: number;
  userId: string;

  _id: ObjectId;
  createdAt: Date;
};
