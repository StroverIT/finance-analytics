export type CreateFinanceDataType = {
  userId: string;
  article: string;
  price: string;
  categoryId: string;
  accountBalanceId: string;
  billImage?: string;
  type: string;
};

export type CreateFinanceType = (data: CreateFinanceDataType) => Promise<any>;

export type TransferDataType = {
  amount: string;
  from: string;
  to: string;
};

export type TransferType = (data: TransferDataType) => Promise<any>;
