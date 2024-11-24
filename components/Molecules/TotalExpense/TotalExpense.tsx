import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { useQuery } from "@tanstack/react-query";
import { getTotalBudget } from "@/API/finance";

export const TotalExpense = () => {
  const { user } = useContext(AppContext);

  const totalBudget = useQuery({
    queryKey: ["totalBudget"],
    queryFn: getTotalBudget.bind(null, user?.uid as string),
  });

  return (
    <View className=" bg-white px-2 py-4 my-4 rounded-xl">
      <Text className="font-semibold text-lg">Похарчени пари за месеца</Text>
      <Text className="text-3xl mt-2 font-semibold text-[#352DFF]">
        {totalBudget.data?.totalExpense?.toFixed(2)}
      </Text>
    </View>
  );
};
