import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import DropDownWithSearch from "@/components/Atoms/DropDownWithSearch";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";

const transfer = () => {
  const [accountsData, setAccountsData] = useState([]);
  const [amount, setAmount] = useState("0");

  const submit = () => {
    console.log("submit");
  };
  return (
    <SafeAreaView className="mx-4 mt-4">
      <HeaderWithBackBtn title="Трансфер" />
      <View className="p-4 bg-white rounded-xl mt-10">
        <DropDownWithSearch data={accountsData} placeholder="Сметка" />
        <Input
          placeholder="Сума"
          label="Сума"
          onChangeText={setAmount}
          value={amount}
        />
        <View className="mt-4">
          <Button text="Изпрати" onPress={submit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default transfer;
