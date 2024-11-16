import { View, Text } from "react-native";
import React from "react";

import Edit from "@/assets/images/icons/edit.svg";
import ProgressBar from "@/components/Molecules/ProgressBar";

export const TotalBudged = () => {
  return (
    <View className="bg-white p-4">
      <Text className="text-xl font-semibold">Общ бюджет</Text>
      <View className="mb-3 mt-10">
        <View className="items-center justify-center flex-row  ">
          <Text className="text-3xl mr-1">
            <Text className="text-[#352DFF]">250</Text> / 2500
          </Text>
          <Edit className="w-6 h-6" />
        </View>
        <View className="flex-row items-center justify-center gap-10">
          <Text className="">Остащи: 2250</Text>
          <Text className="">75 лв / ден</Text>
        </View>
      </View>
      <View className="w-full items-center mb-10">
        <ProgressBar />
      </View>
    </View>
  );
};
