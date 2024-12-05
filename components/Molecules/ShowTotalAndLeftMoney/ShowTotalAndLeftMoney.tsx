import { View, Text } from "react-native";
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTotalBudget } from "@/API/finance";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import Edit from "@/assets/images/icons/edit.svg";

export const ShowTotalAndLeftMoney = () => {
  const { user } = useContext(AppContext);

  const totalBudget = useQuery({
    queryKey: ["totalBudget"],
    queryFn: getTotalBudget.bind(null, user?.uid as string),
  });

  return (
    <>
      <Text className="text-xl font-semibold">Общ бюджет</Text>
      <View className="mb-3 mt-6">
        <View className="items-center justify-center flex-row  ">
          <Text className="text-3xl mr-1">
            <Text className="text-[#352DFF]">
              {totalBudget.data?.totalIncome?.toFixed(2)}
            </Text>
          </Text>
          <Edit className="w-6 h-6" />
        </View>
        <View className="flex-row items-center justify-center gap-10">
          <Text className="">
            {totalBudget.data?.moneyLeftPerDay.toFixed(2)} лв / ден
          </Text>
        </View>
      </View>
    </>
  );
};
