import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import SocialMediaButtons from "@/components/Organism/SocialMediaButtons";
import LineWithText from "@/components/Atoms/LineWithText";
import LogoWithName from "@/components/Molecules/LogoWithName";
import RegisterForm from "@/components/Molecules/RegisterForm";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Register = () => {
  let [fontsLoaded] = useFonts({
    Raleway_700Bold,
  });
  const onLoginPress = () => router.push("/authentication");

  if (!fontsLoaded) return <Text>Зарежда се...</Text>;

  return (
    <ScrollView className="bg-blue-100 h-screen">
      <SafeAreaView className="mx-safe-offset-6 mt-6">
        <LogoWithName />
        <View className="bg-white rounded-xl py-10 px-5 mt-4">
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={onLoginPress}
          />

          <Text className="text-3xl text-blue-500 text-center font-semibold">
            Регистрация
          </Text>
          <Text className="text-center text-gray-500 mt-2 text-sm">
            Имате създаден акаунт? {""}
            <Text
              className="text-blue-500 font-semibold"
              onPress={onLoginPress}
            >
              Вход
            </Text>
          </Text>
          <RegisterForm />
          <LineWithText text="ИЛИ" />
          <SocialMediaButtons />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;
