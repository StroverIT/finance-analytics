export type UseMonthlyDropDownType = ({ queryKey }: { queryKey: string }) => {
  selectedMonth: string;
  onChangeDropDown: (value: string) => void;
};
