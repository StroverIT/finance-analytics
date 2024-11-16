export type RecentTransactionItemType = {
  id: string;
  icon: string;
  category: string;
  date: string;
  amount: string;
  typeFrom: string;
  type: string;
};

export type RecentTransactionType = {
  item: RecentTransactionItemType;
  className?: string;
};
