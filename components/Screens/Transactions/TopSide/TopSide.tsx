import React from "react";
import { Text } from "react-native";
import TotalExpense from "@/components/Molecules/TotalExpense";
import TransactionDetails from "@/components/Organism/TransactionDetails";

export const TopSide = () => {
  return (
    <>
      <Text className="text-center text-2xl font-semibold">Транзакции</Text>
      <TotalExpense />
      <TransactionDetails />
    </>
  );
};
