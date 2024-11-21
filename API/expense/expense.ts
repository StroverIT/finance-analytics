import { CreateFinanceType } from "./types";

const { EXPO_PUBLIC_SERVER_IP } = process.env;

export const getWeekByWeekMonthlyExpenses: CreateFinanceType = async ({
  userId,
  year = "2024",
  month,
}) => {
  const res = await fetch(
    `${EXPO_PUBLIC_SERVER_IP}/expenses/week-by-week-in-month/${year}/${month}/${userId}`
  );
  const response = await res.json();
  return response;
};
