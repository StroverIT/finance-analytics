import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { RecentTransactionType } from "./types";
import { FinanceTypeEnum } from "@/components/Screens/Finances/types";

export const RecentTransaction: FC<RecentTransactionType> = ({
  item,
  className,
}) => {
  const dateFormatted = new Date(item.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    minute: "numeric",
    hour: "numeric",
  });

  const expenseStyle = "text-red-500";
  const isExpense = item.type === FinanceTypeEnum.EXPENSE;

  return (
    <View
      className={`flex-row justify-between items-center py-2 px-4 ${className}`}
    >
      <View className="flex-row items-center">
        <Image
          className="h-10 w-10"
          source={{ uri: item.category.icon }}
          style={{
            objectFit: "contain",
          }}
        />
        <View className="flex-col">
          <Text className="text-lg ml-2">{item.category.name}</Text>
          <Text className="text-sm ml-2">{dateFormatted}</Text>
        </View>
      </View>
      <View className="flex-row items-center">
        <Image
          source={{ uri: item.accountBalance.icon }}
          className="h-5 w-5 mr-4"
          style={{
            objectFit: "contain",
          }}
        />
        <Text className={`text-lg ${isExpense && expenseStyle}`}>
          {isExpense && "-"}
          {item.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
