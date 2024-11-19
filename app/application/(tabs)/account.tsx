import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import LogoutIcon from "@/assets/images/icons/logout.svg";
import ContainerWithHeader from "@/components/layout/ContainerWithHeader";
import NavigationWithIcon from "@/components/Atoms/NavigationWithIcon";

import AccountIcon from "@/assets/images/icons/account.svg";
import TransactionIcon from "@/assets/images/icons/transfer.svg";
import PadlockIcon from "@/assets/images/icons/padlock.svg";
import { router } from "expo-router";
import { auth } from "@/lib/firebaseConfig";

const account = () => {
  const onLogoutPress = () => {
    auth.signOut();
    router.push("/authentication");
  };

  const onExpensesPress = () => router.push("/application/finances/expenses");
  const onIncomePress = () => router.push("/application/finances/income");
  const onTransferPress = () => router.push("/application/finances/transfer");

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        className="mx-4 mt-4"
      >
        <View className="bg-white py-4 px-2 rounded-xl flex-row items-center justify-between">
          <View className="flex-row items-center">
            {/* If there is no image show this */}
            <View className="h-10 w-10 rounded-full bg-gray-500" />
            <Text className="text-2xl ml-2 font-semibold">Emil Zlatinov</Text>
          </View>
          <LogoutIcon className="h-10 w-10" onPress={onLogoutPress} />
        </View>

        <ContainerWithHeader headerText="Финанси">
          <NavigationWithIcon
            title="Разходи"
            icon={<AccountIcon className="w-24 h-24" />}
            onPress={onExpensesPress}
          />
          <NavigationWithIcon
            title="Приходи"
            icon={<PadlockIcon className="w-24 h-24" />}
            onPress={onIncomePress}
          />
          <NavigationWithIcon
            title="Трансфер"
            icon={<TransactionIcon className="w-24 h-24" />}
            onPress={onTransferPress}
          />
        </ContainerWithHeader>
      </ScrollView>
    </SafeAreaView>
  );
};

export default account;
