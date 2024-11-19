import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import SocialMediaButtons from "@/components/Organism/SocialMediaButtons";
import LineWithText from "@/components/Atoms/LineWithText";
import LogoWithName from "@/components/Molecules/LogoWithName";
import LoginForm from "@/components/Molecules/LoginForm";

const Index = () => {
  let [fontsLoaded] = useFonts({
    Raleway_700Bold,
  });

  if (!fontsLoaded) return <Text>Зарежда се...</Text>;

  return (
    <ScrollView className="bg-blue-100 h-screen">
      <SafeAreaView className="mx-safe-offset-6 mt-6">
        <LogoWithName />
        <View className="bg-white rounded-xl py-10 px-5 mt-4">
          <Text className="text-3xl text-blue-500 text-center font-semibold">
            Започни сега
          </Text>
          <Text className="text-center text-gray-500 mt-2 text-sm">
            Създай акаунт или влез със съществуващ
          </Text>
          {!__DEV__ && <SocialMediaButtons className="mt-10" />}
          <LineWithText text="ИЛИ" />
          <LoginForm />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Index;
