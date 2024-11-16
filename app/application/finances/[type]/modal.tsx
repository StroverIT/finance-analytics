import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";

const Modal = () => {
  const [value, setValue] = useState("");

  const { type } = useLocalSearchParams();

  let typeName;
  switch (type) {
    case "account":
      typeName = "Сметка";
      break;
    case "category":
      typeName = "Категория";
      break;
  }

  const onChange = (text: string) => setValue(text);
  const submit = () => {};

  return (
    <SafeAreaView className="mx-4 mt-4">
      <HeaderWithBackBtn title={`Добави ${typeName}`} />
      <View className="p-4 bg-white rounded-xl mt-10">
        <Input
          placeholder="Име"
          onChangeText={onChange}
          value={value}
          label={typeName || ""}
        />
        <View className="mt-4">
          <Button text="Добави" onPress={submit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Modal;
