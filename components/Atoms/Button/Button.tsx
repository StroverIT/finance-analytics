import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      className="bg-cyan-500  rounded-xl py-4"
      onPress={onPress}
    >
      <Text className="font-semibold ml-1 text-white text-center uppercase">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
