import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";
import * as ImagePicker from "expo-image-picker";
import { ColorThemes } from "@/components/Atoms/Button/types";

const Modal = () => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

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
  const pickImage = async () => {
    try {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      // @ts-ignore

      const formData = new FormData();

      // @ts-ignore
      const file = result.assets[0];

      // @ts-ignore
      formData.append("image", {
        uri: file.uri,
        type: file.mimeType,
        name: file.fileName,
      });

      const options = {
        method: "POST",
        body: formData,
      };

      const res = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_IP}/uploadImages`,
        options
      );
      const { imageUrl, message } = await res.json();
      console.log("test+++", imageUrl, message);
      if (message) {
        setImageUrl(imageUrl);
        setImage(imageUrl);
      }
    } catch (e) {
      console.log("test+++ error", e);
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
            onPress={pickImage}
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
