import { GetCategoryType } from "./types";

const { EXPO_PUBLIC_SERVER_IP } = process.env;

export const getCategory: GetCategoryType = async (userId: string) => {
  const res = await fetch(`${EXPO_PUBLIC_SERVER_IP}/category/getAll/${userId}`);
  const data = await res.json();
  return data;
};
