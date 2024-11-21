type MessageType = {
  message: string;
};

type ErrorType = {
  error: string;
};

export type FinanceResponseCreate = MessageType | ErrorType;

export type FinanceGetAll = any;
