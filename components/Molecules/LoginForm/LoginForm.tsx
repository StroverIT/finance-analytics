import { View, KeyboardAvoidingView, Text } from "react-native";
import React, { FC, useState } from "react";
import { LoginFormProps } from "./types";
import Input from "@/components/Atoms/Input";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import Button from "@/components/Atoms/Button";
import { router } from "expo-router";

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isChecked, setChecked] = useState(false);

  const changeEmail = (newEmail: string) => setEmail(newEmail);
  const changeText = (newText: string) => setText(newText);
  const onRegisterPress = () => {
    router.push("/authentication/register");
  };

  return (
    <KeyboardAvoidingView enabled={true} behavior="height">
      <View className={`gap-4`}>
        <Input
          value={email}
          placeholder="Loisbecket@gmail.com"
          onChangeText={changeEmail}
          label="И-мейл"
        />
        <Input
          value={text}
          placeholder="*****"
          onChangeText={changeText}
          label="Парола"
          secureTextEntry
        />
      </View>
      <View className="justify-between items-center flex-row flex-1 my-5">
        <View className="flex-row items-center  flex-1">
          <Checkbox
            value={isChecked}
            style={styles.checkBox}
            onValueChange={setChecked}
            color={isChecked ? "#0ea5e9" : undefined}
          />
          <Text className="ml-1 text-gray-500 text-sm">Запомни ме</Text>
        </View>
        <View className="flex-1">
          <Text className="text-blue-500 text-right font-semibold text-sm">
            Забравена парола?
          </Text>
        </View>
      </View>
      <View>
        <Button text="Вход" onPress={() => console.log("Pressed")} />
      </View>
      <View>
        <Text className="text-center text-gray-500 text-sm mt-5">
          Нямаш акаунт?{" "}
          <Text
            className="text-blue-500 font-semibold"
            onPress={onRegisterPress}
          >
            Регистрирай се
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};
