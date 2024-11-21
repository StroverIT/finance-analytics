import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useContext, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";
import { ColorThemes } from "@/components/Atoms/Button/types";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { ModalTypeCreationEnum } from "@/types/ModelTypes";
import { useQueryClient } from "@tanstack/react-query";
import useUploadImage from "@/hooks/useUploadImage";

const Modal = () => {
  const queryClient = useQueryClient();

  const { user } = useContext(AppContext);
  const [value, setValue] = useState("");
  const { image, imageUrl, uploadImageHandler } = useUploadImage();

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

  const submit = async () => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          user,
          imageUrl,
          value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      let typeOfRequest;

      switch (type) {
        case ModalTypeCreationEnum.account:
          typeOfRequest = "accountBalance";
          break;

        case ModalTypeCreationEnum.category:
          typeOfRequest = "category";
          break;
      }

      const res = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_IP}/${typeOfRequest}/create`,
        options
      );

      const data = await res.json();

      if (data.message) {
        queryClient.invalidateQueries({ queryKey: [type] });

        router.back();
      }
    } catch (e) {
      console.log("test+++ e", e);
    }
  };

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
          <Button
            text="Избери снимка от галерията"
            theme={ColorThemes.green}
            onPress={uploadImageHandler}
          />
        </View>
        {image && <Image source={{ uri: image }} className="h-96 w-full" />}
        <View className="mt-8">
          <Button text={`Създай ${typeName}`} onPress={submit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Modal;
