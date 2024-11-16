import { View, Text } from "react-native";
import React, { FC } from "react";
import SocialMediaButton from "@/components/Atoms/SocialMediaButton";
import { SocialMediaButtonsProps } from "./types";

import Google from "@/assets/images/icons/google.svg";
import Facebook from "@/assets/images/icons/facebook.svg";

export const SocialMediaButtons: FC<SocialMediaButtonsProps> = ({
  className,
}) => {
  const onPressHandler = () => {
    console.log("Button Pressed");
  };
  return (
    <View className={`gap-4 ${className}`}>
      <SocialMediaButton
        icon={<Google width={30} height={30} />}
        text="Вход с Google"
        onPress={onPressHandler}
      />
      <SocialMediaButton
        icon={<Facebook width={30} height={30} />}
        text="Вход с Facebook"
        onPress={onPressHandler}
      />
    </View>
  );
};
