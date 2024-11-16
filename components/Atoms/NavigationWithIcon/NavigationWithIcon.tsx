import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { NavigationWithIconProps } from "./types";
import RightArrow from "@/assets/images/icons/rightArrow.svg";

export const NavigationWithIcon: FC<NavigationWithIconProps> = ({
  icon,
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between px-1"
      onPress={onPress}
    >
      <View className="flex-row">
        {icon}
        <Text className="font-semibold ml-2">{title}</Text>
      </View>

      <RightArrow className="w-10 h-10" />
    </TouchableOpacity>
  );
};
