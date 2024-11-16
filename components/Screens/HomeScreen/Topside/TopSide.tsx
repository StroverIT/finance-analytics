import React from "react";
import TotalBudged from "@/components/Molecules/TotalBudged";
import MonthlyChart from "@/components/Molecules/MonthlyChart";
import { Text } from "react-native";

export const TopSide = () => {
  return (
    <>
      <TotalBudged />
      <MonthlyChart />
      {/* This is header for List of the recent transaction from HomeScreen FlatList */}
      <Text className="text-xl font-semibold px-4">Скорошни транзакции</Text>
    </>
  );
};
