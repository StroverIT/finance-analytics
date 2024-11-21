export type AccountBalanceSchemaType = {
  name: string;
  icon: string;
  balance: number;
  userId: string;

  _id: string;
  createdAt: Date;
};

export type GetAccountBalanceType = (
  userId: string
) => Promise<AccountBalanceSchemaType[]>;
