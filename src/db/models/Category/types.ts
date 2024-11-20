import { ObjectId } from "mongoose";

export type CategorySchemaType = {
  name: string;
  icon: string;
  userId: string;
  _id: ObjectId;
  createdAt: string;
};
