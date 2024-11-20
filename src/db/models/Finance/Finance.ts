import { Schema, model, models, Model } from "mongoose";
import { FinanceSchemaType, FinanceTypeEnum } from "./types";

const FinanceScheme = new Schema<FinanceSchemaType>({
  userId: String,

  price: Number,
  article: String,

  account: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  type: FinanceTypeEnum,
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
