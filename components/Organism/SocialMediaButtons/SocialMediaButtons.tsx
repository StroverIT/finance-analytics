import { View } from "react-native";
import React, { FC } from "react";
import SocialMediaButton from "@/components/Atoms/SocialMediaButton";
import { SocialMediaButtonsProps } from "./types";

import Google from "@/assets/images/icons/google.svg";
import Facebook from "@/assets/images/icons/facebook.svg";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { auth } from "@/lib/firebaseConfig";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  // androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
});

export const SocialMediaButtons: FC<SocialMediaButtonsProps> = ({
  className,
}) => {
  const googlePressHandler = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      await GoogleSignin.signIn();
      const { accessToken, idToken } = await GoogleSignin.getTokens();
      const credential = GoogleAuthProvider.credential(idToken, accessToken);

      await signInWithCredential(auth, credential);
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
