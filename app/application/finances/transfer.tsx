import { View, Text, SafeAreaView } from "react-native";
import React, { useContext, useRef, useState } from "react";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import DropDownWithSearch from "@/components/Atoms/DropDownWithSearch";
import Input from "@/components/Atoms/Input";
import Button from "@/components/Atoms/Button";
import { useQuery } from "@tanstack/react-query";
import { getAccountBalance } from "@/API/account/account";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import {
  DropDownWithSearchRefType,
  RefDropDownType,
} from "@/components/Atoms/DropDownWithSearch/types";
import { transferAccountBalance } from "@/API/finance";
import { TransferDataType } from "@/API/finance/types";
import { router } from "expo-router";

const transfer = () => {
  const { user } = useContext(AppContext);

  const account = useQuery({
    queryKey: ["account"],
    queryFn: getAccountBalance.bind(null, user?.uid as string),
  });

  const [amount, setAmount] = useState("0");

  const fromAccountRef = useRef<DropDownWithSearchRefType>(null);
  const toAccountRef = useRef<DropDownWithSearchRefType>(null);

  const submit = async () => {
    const data = {
      amount,
      from: fromAccountRef?.current?.getData(),
      to: toAccountRef?.current?.getData(),
    } as TransferDataType;

    const res = await transferAccountBalance(data);

    if (res?.message) router.push("/application/(tabs)");
  };
  return (
    <SafeAreaView className="mx-4 mt-4">
      <HeaderWithBackBtn title="Трансфер" />
      <View className="p-4 bg-white rounded-xl mt-10">
        <Text className="ml-4">От сметка</Text>
        <DropDownWithSearch
          data={account.data}
          placeholder="Сметка"
          ref={fromAccountRef}
        />
        <Text className="ml-4">Към сметка</Text>
        <DropDownWithSearch
          data={account.data}
          placeholder="Сметка"
          ref={toAccountRef}
        />

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
