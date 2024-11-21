export type CategorySchemaType = {
  name: string;
  icon: string;
  userId: string;
  _id: string;
  createdAt: Date;
};

export type GetCategoryType = (userId: string) => Promise<CategorySchemaType[]>;
