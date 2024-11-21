import { Schema, model, models, Model } from "mongoose";
import { CategorySchemaType } from "./types";

const CategorySchema = new Schema<CategorySchemaType>({
  name: String,
  icon: String,

  userId: String,
  createdAt: {
    type: Date,
    default: () => {
      return new Date(Date.now());
    },
  },
});

export const Category =
  (models.Category as Model<CategorySchemaType>) ||
  model<CategorySchemaType>("Category", CategorySchema);
