import { View, Text } from "react-native";
import React, { FC } from "react";
import { ArticleInputProps } from "./types";
import Input from "@/components/Atoms/Input";

export const ArticleInput: FC<ArticleInputProps> = ({
  price,
  type,
  onChange,
}) => {
  return (
    <View className="bg-white p-4 rounded-xl gap-4">
      <Input
        label="Цена"
        placeholder="0"
        value={price}
        onChangeText={onChange.bind(null, "price")}
      />
      <Input
        label="Артикул"
        placeholder="Цигари"
        value={type}
        onChangeText={onChange.bind(null, "type")}
      />
    </View>
  );
};
