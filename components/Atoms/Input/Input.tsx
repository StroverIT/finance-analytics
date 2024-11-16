import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry = false,
}) => {
  return (
    <View>
      <Text className="text-gray-600 mb-1">{label}</Text>
      <TextInput
        className="border-2 border-gray-300 rounded-lg px-3"
        style={{ height: 40 }}
        value={value}
        placeholder={placeholder}
        onChangeText={(newText) => onChangeText(newText)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
