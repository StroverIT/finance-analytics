import { GetAccountBalanceType } from "./types";

export const getAccountBalance: GetAccountBalanceType = async (
  userId: string
) => {
  const res = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_IP}/accountBalance/getAll/${userId}`
  );
  const data = await res.json();
  return data;
};
