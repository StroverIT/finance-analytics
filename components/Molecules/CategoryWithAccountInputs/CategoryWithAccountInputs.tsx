import { View, Text } from "react-native";
import React, { useState } from "react";
import DropDownWithSearch from "@/components/Atoms/DropDownWithSearch";
import Button from "@/components/Atoms/Button";
import { ColorThemes } from "@/components/Atoms/Button/types";
import { router } from "expo-router";

export const CategoryWithAccountInputs = () => {
  const [accountData, setAccounts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const addAccount = () => router.push("/application/finances/account/modal");

  const addCategory = () => router.push("/application/finances/category/modal");
  return (
    <View className="mt-4 bg-white rounded-xl p-4">
      <View className="flex-row items-center">
        <View className="flex-1">
          <DropDownWithSearch data={accountData} placeholder="Сметка" />
        </View>
        <View className="w-10">
          <Button text="+" theme={ColorThemes.green} onPress={addAccount} />
        </View>
      </View>

      <View className="flex-row items-center">
        <View className="flex-1">
          <DropDownWithSearch data={categoryData} placeholder="Категория" />
        </View>
        <View className="w-10">
          <Button text="+" theme={ColorThemes.green} onPress={addCategory} />
        </View>
      </View>
    </View>
  );
};
