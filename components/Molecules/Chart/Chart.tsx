import { View, Text } from "react-native";
import React, { FC, useContext, useMemo } from "react";
import { ChartProps } from "./types";
import { BarChart } from "react-native-gifted-charts";
import { useQuery } from "@tanstack/react-query";
import { getWeekByWeekMonthlyExpenses } from "@/API/expense";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";

const date = new Date(new Date());
const year = date.getFullYear().toString();

export const Chart: FC<ChartProps> = ({ selectedMonth }) => {
  const { user } = useContext(AppContext);
  const monthlyExpenses = useQuery({
    queryKey: ["monthlyExpenses"],
    queryFn: getWeekByWeekMonthlyExpenses.bind(null, {
      userId: user?.uid as string,
      year,
      month: selectedMonth,
    }),
  });

  const { week1, week2, week3, week4 } = monthlyExpenses.data || {};

  const memoizedData = useMemo(() => {
    return [
      {
        value: week1,

        labelComponent: () => (
          <View className="">
            <Text className="text-[#514BF3] text-center font-semibold">
              {week1}
            </Text>
            <Text className="text-[#514BF3] text-center font-semibold">
              Сед 1
            </Text>
          </View>
        ),
      },
      {
        value: week2,
        labelComponent: () => (
          <View className="">
            <Text className="text-[#514BF3] text-center font-semibold">
              {week2}
            </Text>
            <Text className="text-[#514BF3] text-center font-semibold">
              Сед 2
            </Text>
          </View>
        ),
      },
      {
        value: week3,
        labelComponent: () => (
          <View className="">
            <Text className="text-[#514BF3] text-center font-semibold">
              {week3}
            </Text>
            <Text className="text-[#514BF3] text-center font-semibold">
              Сед 3
            </Text>
          </View>
        ),
      },
      {
        value: week4,
        labelComponent: () => (
          <View className="">
            <Text className="text-[#514BF3] text-center font-semibold">
              {week4}
            </Text>
            <Text className="text-[#514BF3] text-center font-semibold">
              Сед 4
            </Text>
          </View>
        ),
      },
    ];
  }, [monthlyExpenses.data]);

  return (
    <BarChart
      // @ts-ignore
      data={memoizedData}
      color={"white"}
      frontColor="#84A5FF"
      barBorderRadius={10}
      barWidth={50}
      barBorderColor={"#84A5FF"}
      yAxisThickness={0}
      xAxisThickness={0}
      noOfSections={5}
      disableScroll
    />
  );
};
