import React, { createContext, useEffect, useState } from "react";
import { TransactionContextType } from "./types";
import useMonthlyDropDown from "@/hooks/useMonthlyDropDown";
import { useQueryClient } from "@tanstack/react-query";

// Define the initial values for user and isUserLoading
const initialSelectedCategory = "Виж всички";

// Create the context
export const TransactionContext = createContext<{
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onChangeDropDown: (month: string) => void;
  selectedMonth: string;
}>({
  selectedCategory: initialSelectedCategory,
  setSelectedCategory: (category: string) => {},
  onChangeDropDown: (month: string) => {},
  selectedMonth: "",
});

// Create the provider component
export const TransactionProvider: React.FC<TransactionContextType> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialSelectedCategory
  );

  const queryClient = useQueryClient();

  const { onChangeDropDown, selectedMonth } = useMonthlyDropDown({
    queryKey: "monthlyExpensesPerWeek",
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["recentTransactions"] });
  }, [selectedCategory, selectedMonth]);

  return (
    <TransactionContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        onChangeDropDown,
        selectedMonth,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
