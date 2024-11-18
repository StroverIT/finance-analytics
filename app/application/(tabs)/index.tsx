import { FlatList, SafeAreaView } from "react-native";
import React, { useEffect } from "react";

import { RecentTransaction } from "@/components/Molecules/RecentTransaction/RecentTransaction";
import TopSide from "@/components/Screens/HomeScreen/Topside";
import { RecentTransactionType } from "@/components/Molecules/RecentTransaction/types";

const data = [
  {
    id: "1",
    icon: "icon",
    category: "Храна",
    date: "01.11.2024",
    amount: "50.00",
    typeFrom: "cash",
    type: "expense",
  },
  {
    id: "2",

    icon: "icon",
    category: "Пътувания",
    date: "01.11.2024",
    amount: "50.00",
    typeFrom: "cash",
    type: "expense",
  },
  {
    id: "3",

    icon: "icon",
    category: "Там нещо",
    date: "01.11.2024",
    amount: "50.00",
    typeFrom: "cash",
    type: "expense",
  },
  {
    id: "4",

    icon: "icon",
    category: "Храна",
    date: "01.11.2024",
    amount: "50.00",
    typeFrom: "cash",
    type: "expense",
  },
  {
    id: "5",

    icon: "icon",
    category: "Храна",
    date: "01.11.2024",
    amount: "50.00",
    typeFrom: "cash",
    type: "expense",
  },
  {
    id: "6",

    icon: "icon",
    category: "Храна",
    date: "01.11.2024",
    amount: "50.00",
    typeFrom: "cash",
    type: "expense",
  },
];

const Index = () => {
  const renderRecentTransactions = ({ item }: RecentTransactionType) => (
    <RecentTransaction item={item} />
  );

  useEffect(() => {
    const init = async () => {
      console.log("test+++ are brat");
      try {
        const test = await fetch("http://192.168.1.3:3000/api/v1/emojis");
        const res = await test.json();
        console.log("test+++", res);
      } catch (e) {
        console.log("test+++ error", e);
      }
    };
    init();
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<TopSide />}
        data={data}
        renderItem={renderRecentTransactions}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Index;
