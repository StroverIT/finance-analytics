import { View, KeyboardAvoidingView, Text } from "react-native";
import React, { FC, useState } from "react";
import { LoginFormProps } from "./types";
import Input from "@/components/Atoms/Input";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import Button from "@/components/Atoms/Button";
import { router } from "expo-router";
import { auth } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const changeEmail = (newEmail: string) => setEmail(newEmail);
  const changePassword = (newText: string) => setPassword(newText);
  const onRegisterPress = () => {
    router.push("/authentication/register");
  };

  const onLoginPress = async () => {
    setLoading(true);
    setError("");
    // Add your login logic here
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // There is firebase error but can't find it for now
    } catch (e) {
      setError("Невалидни данни");
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView enabled={true} behavior="height">
      {error && <Text className="text-red-500 text-center">{error}</Text>}
      <View className={`gap-4`}>
        <Input
          value={email}
          placeholder="Loisbecket@gmail.com"
          onChangeText={changeEmail}
          label="И-мейл"
        />
        <Input
          value={password}
          placeholder="*****"
          onChangeText={changePassword}
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
        <Button text="Вход" onPress={onLoginPress} />
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
