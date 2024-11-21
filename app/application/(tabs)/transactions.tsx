import { SafeAreaView } from "react-native";
import React from "react";
import { TransactionProvider } from "@/hooks/context/useTransactionProvider";
import TransactionScreen from "@/components/Screens/Transactions/TransactionScreen/TransactionScreen";

const transactions = () => {
  return (
    // @ts-ignore
    <TransactionProvider>
      <SafeAreaView>
        <TransactionScreen />
      </SafeAreaView>
    </TransactionProvider>
  );
};

export default transactions;
