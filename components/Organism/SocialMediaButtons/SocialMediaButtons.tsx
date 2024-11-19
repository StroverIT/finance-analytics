import { View } from "react-native";
import React, { FC } from "react";
import SocialMediaButton from "@/components/Atoms/SocialMediaButton";
import { SocialMediaButtonsProps } from "./types";

import Google from "@/assets/images/icons/google.svg";
import Facebook from "@/assets/images/icons/facebook.svg";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "976590757431-e608bud18h45cf9rsfl820qqt32s420b.apps.googleusercontent.com",
  // androidClientId:
  //   "976590757431-stf2pp8atmt7j47e04vt5afr9qplkmus.apps.googleusercontent.com",
  // iosClientId:
  //   "976590757431-eeon3frn6neugqkhtk2bt6vsom5706bd.apps.googleusercontent.com",
});

export const SocialMediaButtons: FC<SocialMediaButtonsProps> = ({
  className,
}) => {
  const googlePressHandler = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
    } catch (error) {
      console.log(error);
    }
  };
  const onPressHandler = () => {
    console.log("Button Pressed");
  };
  return (
    <View className={`gap-4 ${className}`}>
      <SocialMediaButton
        icon={<Google width={30} height={30} />}
        text="Вход с Google"
        onPress={googlePressHandler}
      />
      <SocialMediaButton
        icon={<Facebook width={30} height={30} />}
        text="Вход с Facebook"
        onPress={onPressHandler}
      />
    </View>
  );
};
