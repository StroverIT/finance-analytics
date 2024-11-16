import { View, KeyboardAvoidingView, Text } from "react-native";
import React, { FC, useState } from "react";
import { RegisterFormProps } from "./types";
import Input from "@/components/Atoms/Input";
import { styles } from "./styles";
import Button from "@/components/Atoms/Button";
import { router } from "expo-router";
import Row from "@/components/layout/Row";
import Col from "@/components/layout/Col";

export const RegisterForm: FC<RegisterFormProps> = ({ className }) => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const changeName = (newName: string) => setName(newName);
  const changeSecondName = (newSecondName: string) =>
    setSecondName(newSecondName);
  const changeEmail = (newEmail: string) => setEmail(newEmail);
  const changeText = (newText: string) => setText(newText);
  const submitHandler = () => router.push("/authenciation/register");

  return (
    <KeyboardAvoidingView enabled={true} behavior="height">
      <View className="gap-4 mt-5">
        <View style={styles.container}>
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
        </View>
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
      </View>
      <View className="mt-4">
        <Button text="Изпрати" onPress={() => console.log("Pressed")} />
      </View>
    </KeyboardAvoidingView>
  );
};
