import { Schema, model, models, Model } from "mongoose";
import { AccountBalanceSchemaType } from "./types";

const AccountBalanceSchema = new Schema<AccountBalanceSchemaType>({
  name: String,
  icon: String,
  userId: String,
  balance: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: () => {
      return new Date(Date.now());
    },
  },
});

export const AccountBalance =
  (models.AccountBalance as Model<AccountBalanceSchemaType>) ||
  model<AccountBalanceSchemaType>("AccountBalance", AccountBalanceSchema);
