import { View } from "react-native";
import React, { FC, useContext } from "react";
import DropDownWithSearch from "@/components/Atoms/DropDownWithSearch";
import Button from "@/components/Atoms/Button";
import { ColorThemes } from "@/components/Atoms/Button/types";
import { router } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { getCategory } from "@/API/category";
import { getAccountBalance } from "@/API/account/account";
import { CategoryWithAccountInputsProps } from "./types";

export const CategoryWithAccountInputs: FC<CategoryWithAccountInputsProps> = ({
  accountRef,
  categoryRef,
}) => {
  const { user } = useContext(AppContext);

  const category = useQuery({
    queryKey: ["category"],
    queryFn: getCategory.bind(null, user?.uid as string),
  });

  const account = useQuery({
    queryKey: ["account"],
    queryFn: getAccountBalance.bind(null, user?.uid as string),
  });

  const addAccount = () => router.push("/application/finances/account/modal");

  const addCategory = () => router.push("/application/finances/category/modal");
  return (
    <View className="mt-4 bg-white rounded-xl p-4">
      <View className="flex-row items-center">
        <View className="flex-1">
          <DropDownWithSearch
            data={account.data}
            placeholder="Сметка"
            isFirstItem
            ref={accountRef}
          />
        </View>
        <View className="w-10">
          <Button text="+" theme={ColorThemes.green} onPress={addAccount} />
        </View>
      </View>

      <View className="flex-row items-center">
        <View className="flex-1">
          <DropDownWithSearch
            data={category.data}
            placeholder="Категория"
            isFirstItem
            ref={categoryRef}
          />
        </View>
        <View className="w-10">
          <Button text="+" theme={ColorThemes.green} onPress={addCategory} />
        </View>
      </View>
    </View>
  );
};
