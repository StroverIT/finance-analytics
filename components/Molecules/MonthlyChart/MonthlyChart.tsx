import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import DropDown from "@/components/Molecules/DropDown";
import Chart from "@/components/Molecules/Chart";
import { useQueryClient } from "@tanstack/react-query";

const date = new Date(new Date());
const currentMonth = date.getMonth().toString();

export const MonthlyChart = () => {
  const [selectedMonth, setValue] = useState(currentMonth);

  const queryClient = useQueryClient();

  const onChangeDropDown = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["monthlyExpenses"] });
  }, [selectedMonth]);

  return (
    <View className="px-4 py-10">
      <View className="justify-between items-center flex-row">
        <Text className="text-xl font-semibold flex-1">Текущи разходи</Text>
        <DropDown onChange={onChangeDropDown} value={selectedMonth} />
      </View>
      <View className="mt-4">
        <Chart selectedMonth={selectedMonth} />
      </View>
    </View>
  );
};
