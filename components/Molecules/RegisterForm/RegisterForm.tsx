import { View, KeyboardAvoidingView, Text } from "react-native";
import React, { FC, useState } from "react";
import { RegisterFormProps } from "./types";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

export const RegisterForm: FC<RegisterFormProps> = ({ className }) => {
  const [isLoading, setLoading] = useState(false);

  // const [name, setName] = useState("");
  // const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const changeName = (newName: string) => setName(newName);
  // const changeSecondName = (newSecondName: string) =>
  // setSecondName(newSecondName);
  const changeEmail = (newEmail: string) => setEmail(newEmail);
  const changePassword = (newPassword: string) => setPassword(newPassword);

  const registerHandler = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // There is firebase error but can't find it for now
    } catch (e: any) {
      const code = e.code;

      if (code.includes("auth/email-already-in-use"))
        return setError("Този имейл вече съществува");

      setError("Невалидни данни");
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView enabled={true} behavior="height">
      <View className="gap-4 mt-5">
        {/* <View style={styles.container}>
          <Row className="gap-4">
            <Col numRows={1}>
              <Input
                value={name}
                placeholder="Иван"
                onChangeText={changeName}
                label="Име"
              />
            </Col>
            <Col numRows={1}>
              <Input
                value={secondName}
                placeholder="Петров"
                onChangeText={changeSecondName}
                label="Фамилия"
              />
            </Col>
          </Row>
        </View> */}
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
      </View>
      <View className="mt-4">
        <Button text="Изпрати" onPress={registerHandler} />
      </View>
    </KeyboardAvoidingView>
  );
};
