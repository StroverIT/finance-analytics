import { ObjectId } from "mongoose";

export type AccountSchemaType = {
  name: string;
  icon: string;
  _id: ObjectId;
  createdAt: string;
};
