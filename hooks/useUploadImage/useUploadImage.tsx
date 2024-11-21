import { View, Text } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export const useUploadImage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploadImageHandler = async () => {
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

      if (message) {
        setImageUrl(imageUrl);
        setImage(imageUrl);
      }
    } catch (e) {
      console.log("test+++ error", e);
    }
  };
  return { image, imageUrl, uploadImageHandler };
};
