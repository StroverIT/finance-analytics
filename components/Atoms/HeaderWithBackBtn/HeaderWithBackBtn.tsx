import { View, Text } from "react-native";
import React, { FC } from "react";
import RightArrow from "@/assets/images/icons/leftIcon.svg";
import { router } from "expo-router";
import { HeaderWithBackBtnProps } from "./types";

export const HeaderWithBackBtn: FC<HeaderWithBackBtnProps> = ({ title }) => {
  const goBack = () => router.back();
  return (
    <View className="flex-row justify-between items-center">
      <RightArrow className="w-24 h-24 " onPress={goBack} />
      <Text className="text-2xl font-semibold text-center">{title}</Text>
      <View />
    </View>
  );
};
