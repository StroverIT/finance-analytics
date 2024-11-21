import { GetAccountBalanceType } from "./types";

const { EXPO_PUBLIC_SERVER_IP } = process.env;

export const getAccountBalance: GetAccountBalanceType = async (
  userId: string
) => {
  const res = await fetch(
    `${EXPO_PUBLIC_SERVER_IP}/accountBalance/getAll/${userId}`
  );
  const data = await res.json();
  return data;
};
