import { Schema, model, models, Model } from "mongoose";
import { CategorySchemaType } from "./types";

const CategorySchema = new Schema<CategorySchemaType>({
  name: String,
  icon: String,

  createdAt: {
    type: String,
    default: () => {
      return new Date(Date.now()).toLocaleDateString();
    },
  },
});

export const Category =
  (models.Category as Model<CategorySchemaType>) ||
  model<CategorySchemaType>("Category", CategorySchema);
