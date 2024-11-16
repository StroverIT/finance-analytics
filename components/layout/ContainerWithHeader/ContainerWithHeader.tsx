import { View, Text } from "react-native";
import React, { FC } from "react";
import { ContainerWithHeaderProps } from "./types";

export const ContainerWithHeader: FC<ContainerWithHeaderProps> = ({
  children,
  headerText,
}) => {
  return (
    <View className="mt-6">
      <Text className="mb-4 text-gray-500 text-sm">{headerText}</Text>
      <View className="bg-white py-4 px-2 rounded-xl gap-4">{children}</View>
    </View>
  );
};
