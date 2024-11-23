import { GetCategoryType } from "./types";

export const getCategory: GetCategoryType = async (userId: string) => {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_IP}/category/getAll/${userId}`
  );
  const data = await res.json();
  return data;
};
