import { View, Text } from "react-native";
import React, { FC } from "react";
import { ChartProps } from "./types";
import { BarChart } from "react-native-gifted-charts";

const data = [
  {
    value: 100,

    labelComponent: () => (
      <View className="">
        <Text className="text-[#514BF3] text-center font-semibold">100</Text>
        <Text className="text-[#514BF3] text-center font-semibold">Сед 1</Text>
      </View>
    ),
  },
  {
    value: 300,
    labelComponent: () => (
      <View className="">
        <Text className="text-[#514BF3] text-center font-semibold">300</Text>
        <Text className="text-[#514BF3] text-center font-semibold">Сед 2</Text>
      </View>
    ),
  },
  {
    value: 1000,
    labelComponent: () => (
      <View className="">
        <Text className="text-[#514BF3] text-center font-semibold">1000</Text>
        <Text className="text-[#514BF3] text-center font-semibold">Сед 3</Text>
      </View>
    ),
  },
  {
    value: 1500,
    labelComponent: () => (
      <View className="">
        <Text className="text-[#514BF3] text-center font-semibold">1500</Text>
        <Text className="text-[#514BF3] text-center font-semibold">Сед 4</Text>
      </View>
    ),
  },
];

export const Chart: FC<ChartProps> = () => {
  return (
    <BarChart
      data={data}
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
