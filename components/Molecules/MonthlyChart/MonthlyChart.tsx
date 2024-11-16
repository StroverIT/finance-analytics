import { View, Text } from "react-native";
import React from "react";
import DropDown from "@/components/Molecules/DropDown";
import Chart from "@/components/Molecules/Chart";

export const MonthlyChart = () => {
  return (
    <View className="px-4 py-10">
      <View className="justify-between items-center flex-row">
        <Text className="text-xl font-semibold flex-1">Текущи разходи</Text>
        <DropDown />
      </View>
      <View className="mt-4">
        <Chart />
      </View>
    </View>
  );
};
