import { View, Text } from "react-native";
import React, { useContext } from "react";

import Edit from "@/assets/images/icons/edit.svg";
import ProgressBar from "@/components/Molecules/ProgressBar";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { getTotalBudget } from "@/API/finance";
import ShowAllAccounts from "@/components/Organism/ShowAllAccounts";

export const TotalBudged = () => {
  const { user } = useContext(AppContext);

  const totalBudget = useQuery({
    queryKey: ["totalBudget"],
    queryFn: getTotalBudget.bind(null, user?.uid as string),
  });

  return (
    <View className="bg-white p-4">
      <Text className="text-xl font-semibold">Общ бюджет</Text>
      <View className="mb-3 mt-10">
        <View className="items-center justify-center flex-row  ">
          <Text className="text-3xl mr-1">
            <Text className="text-[#352DFF]">
              {totalBudget.data?.totalExpense}
            </Text>{" "}
            / {totalBudget.data?.totalIncome}
          </Text>
          <Edit className="w-6 h-6" />
        </View>
        <View className="flex-row items-center justify-center gap-10">
          <Text className="">Остащи: {totalBudget.data?.difference}</Text>
          <Text className="">
            {totalBudget.data?.moneyLeftPerDay.toFixed(2)} лв / ден
          </Text>
        </View>
      </View>
      <View className="w-full items-center mb-4">
        <ProgressBar progress={totalBudget.data?.differenceInPercentage} />
      </View>
      <ShowAllAccounts />
    </View>
  );
};
