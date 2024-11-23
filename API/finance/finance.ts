import {
  CreateFinanceType,
  GetTotalBudgetType,
  MonthlyExpensesPerWeekType,
  RecentTransactionType,
  TransferType,
} from "./types";

export const createFinance: CreateFinanceType = async (data) => {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_IP}/finance/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const response = await res.json();
  return response;
};

export const transferAccountBalance: TransferType = async (data) => {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_IP}/finance/transfer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const response = await res.json();
  return response;
};

export const getTotalBudget: GetTotalBudgetType = async (userId) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  };
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_IP}/finance/totalBudget`,
    options
  );
  const response = await res.json();
  return response;
};

export const recentTransaction: RecentTransactionType = async (
  userId: string
) => {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_IP}/finance/recent/${userId}`
  );
  const response = await res.json();
  return response;
};

export const getMonthlyExpensesPerWeek: MonthlyExpensesPerWeekType = async ({
  userId,
  month,
  category,
}) => {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_IP}/finance//monthlyTransactions/${userId}/${month}/${category}`
  );
  const response = await res.json();
  return response;
};
