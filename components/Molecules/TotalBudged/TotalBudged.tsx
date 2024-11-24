import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";

import Edit from "@/assets/images/icons/edit.svg";
import ProgressBar from "@/components/Molecules/ProgressBar";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { getTotalBudget } from "@/API/finance";
import ShowAllAccounts from "@/components/Organism/ShowAllAccounts";
import SharedPreferencesModule from "@/utils/nativeModules/SharedPreferencesModule";

export const TotalBudged = () => {
  const { user } = useContext(AppContext);

  const totalBudget = useQuery({
    queryKey: ["totalBudget"],
    queryFn: getTotalBudget.bind(null, user?.uid as string),
  });

  // Also this could be in the application layout and check for totalBudgett change
  // Because if we are on different screen and change something related, it wont be displayed here

  useEffect(() => {
    if (totalBudget.data)
      SharedPreferencesModule.setWidgetData(
        "widget_text",
        JSON.stringify(totalBudget.data)
      );
  }, [totalBudget.data]);

  return (
    <View className="bg-white p-4">
      <Text className="text-xl font-semibold">Общ бюджет</Text>
      <View className="mb-3 mt-6">
        <View className="items-center justify-center flex-row  ">
          <Text className="text-3xl mr-1">
            <Text className="text-[#352DFF]">
              {totalBudget.data?.totalExpense?.toFixed(2)}
            </Text>{" "}
            / {totalBudget.data?.totalIncome?.toFixed(2)}
          </Text>
          <Edit className="w-6 h-6" />
        </View>
        <View className="flex-row items-center justify-center gap-10">
          <Text className="">
            Остащи: {totalBudget.data?.difference?.toFixed(2)}
          </Text>
          <Text className="">
            {totalBudget.data?.moneyLeftPerDay.toFixed(2)} лв / ден
          </Text>
        </View>
      </View>
      <View className="w-full items-center mb-6">
        <ProgressBar progress={totalBudget.data?.differenceInPercentage} />
      </View>
      <ShowAllAccounts />
    </View>
  );
};
