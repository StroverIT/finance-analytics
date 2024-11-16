import { View, Text } from "react-native";
import React, { FC } from "react";
import { RecentTransactionType } from "./types";

export const RecentTransaction: FC<RecentTransactionType> = ({
  item,
  className,
}) => {
  return (
    <View
      className={`flex-row justify-between items-center py-2 px-4 ${className}`}
    >
      <View className="flex-row items-center">
        <View className="h-8 w-8 bg-gray-200 rounded-full mr-2"></View>
        <Text className="text-lg">{item.category}</Text>
      </View>
      <Text className="text-lg">{item.amount}</Text>
    </View>
  );
};
