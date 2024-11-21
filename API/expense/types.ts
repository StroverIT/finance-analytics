export type CreateFinanceDataType = {
  week1: number;
  week2: number;
  week3: number;
  week4: number;
};

export type CreateFinanceType = (data: {
  userId: string;
  year?: string;
  month: string;
}) => Promise<CreateFinanceDataType>;
