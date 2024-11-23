import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { LogoWithNameProps } from "./types";

export const LogoWithName: FC<LogoWithNameProps> = () => {
  return (
    <View className="flex items-center justify-center flex-row">
      <Image
        source={require("@/assets/images/icon-v2-nobg.png")}
        className="h-24 w-24"
      />

      <Text
        className="text-center text-4xl"
        style={{
          fontFamily: "Raleway_700Bold",
        }}
      >
        WalletWay
      </Text>
    </View>
  );
};
