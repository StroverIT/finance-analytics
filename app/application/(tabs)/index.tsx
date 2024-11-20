import { FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect } from "react";

import { RecentTransaction } from "@/components/Molecules/RecentTransaction/RecentTransaction";
import TopSide from "@/components/Screens/HomeScreen/Topside";
import { RecentTransactionType } from "@/components/Molecules/RecentTransaction/types";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";

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
  const { user } = useContext(AppContext);

  const renderRecentTransactions = ({ item }: RecentTransactionType) => (
    <RecentTransaction item={item} />
  );

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
