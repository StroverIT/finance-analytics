import { Schema, model, models, Model } from "mongoose";
import { FinanceSchemaType, FinanceTypeEnum } from "./types";

const FinanceScheme = new Schema<FinanceSchemaType>({
  userId: String,

  price: Number,
  article: String,

  billImage: String,

  accountBalance: {
    type: Schema.Types.ObjectId,
    ref: "AccountBalance",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  type: {
    type: String,
    enum: [FinanceTypeEnum.INCOME, FinanceTypeEnum.EXPENSE],
  },
  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
});

export const Finance =
  (models.Finance as Model<FinanceSchemaType>) ||
  model<FinanceSchemaType>("Finance", FinanceScheme);
