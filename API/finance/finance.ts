import { CreateFinanceType, GetTotalBudgetType, TransferType } from "./types";

const { EXPO_PUBLIC_SERVER_IP } = process.env;

export const createFinance: CreateFinanceType = async (data) => {
  const res = await fetch(`${EXPO_PUBLIC_SERVER_IP}/finance/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await res.json();
  return response;
};

export const transferAccountBalance: TransferType = async (data) => {
  const res = await fetch(`${EXPO_PUBLIC_SERVER_IP}/finance/transfer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
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
    `${EXPO_PUBLIC_SERVER_IP}/finance/totalBudget`,
    options
  );
  const response = await res.json();
  return response;
};
