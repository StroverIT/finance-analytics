import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { ButtonProps, ColorThemes } from "./types";

const themeComplier = {
  primary: {
    backgroundColor: "bg-cyan-500",
    textColor: "text-white",
  },
  green: {
    backgroundColor: "bg-green-500",
    textColor: "text-white",
  },
};

export const Button: FC<ButtonProps> = ({
  onPress,
  text,
  theme = ColorThemes.primary,
}) => {
  // TODO: This could be extended to have only text, only icon, icon with text, etc.
  return (
    <TouchableOpacity
      className={`${themeComplier[theme].backgroundColor} rounded-xl py-4 `}
      onPress={onPress}
    >
      <Text
        className={`${themeComplier[theme].textColor} font-semibold ml-1 text-white text-center uppercase`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
