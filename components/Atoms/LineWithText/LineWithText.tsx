import { View, Text } from "react-native";
import React, { FC } from "react";
import { LineWithTextProps } from "./types";

export const LineWithText: FC<LineWithTextProps> = ({ text }) => {
  return (
    <View className="my-10 flex-row items-center relative">
      <View className="w-full h-[1px] bg-gray-300 flex-1" />
      <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10 px-3 ">
        <Text className="text-gray-400">{text}</Text>
      </View>
      <View className="w-full h-[1px] bg-gray-300 flex-1" />
    </View>
  );
};
