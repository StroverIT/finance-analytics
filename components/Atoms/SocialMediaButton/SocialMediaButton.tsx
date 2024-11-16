import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { SocialMediaButtonProps } from "./types";

export const SocialMediaButton: FC<SocialMediaButtonProps> = ({
  icon,
  onPress,
  text,
}) => {
  return (
    <View className="border border-gray-300 rounded-xl py-4 px-2 ">
      <TouchableOpacity
        className="flex-row items-center mx-auto"
        onPress={onPress}
      >
        {icon}
        <Text className="font-semibold ml-1">{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
