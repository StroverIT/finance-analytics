import { Schema, model, models, Model } from "mongoose";
import { AccountSchemaType } from "./types";

const AccountSchema = new Schema<AccountSchemaType>({
  name: String,
  icon: String,

  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
});

export const Account =
  (models.Account as Model<AccountSchemaType>) ||
  model<AccountSchemaType>("Account", AccountSchema);
