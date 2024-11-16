import { View, Text, SectionList, SafeAreaView } from "react-native";
import React from "react";
import TopSide from "@/components/Screens/Transactions/TopSide";
import { RecentTransactionType } from "@/components/Molecules/RecentTransaction/types";
import RecentTransaction from "@/components/Molecules/RecentTransaction";

const sectionListData = [
  {
    title: "26 Nov to 30 Nov",
    data: [
      {
        id: "1",
        icon: "icon",
        category: "Храна",
        date: "26.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "expense",
      },
      {
        id: "2",
        icon: "icon",
        category: "Храна",
        date: "25.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "expense",
      },
      {
        id: "3",
        icon: "icon",
        category: "Храна",
        date: "24.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "income",
      },
    ],
  },
  {
    title: "19 Nov to 26 Nov",
    data: [
      {
        id: "4",
        icon: "icon",
        category: "Храна",
        date: "19.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "expense",
      },
      {
        id: "5",
        icon: "icon",
        category: "Храна",
        date: "24.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "expense",
      },
      {
        id: "6",
        icon: "icon",
        category: "Храна",
        date: "26.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "income",
      },
    ],
  },
  {
    title: "12 Nov to 18 Nov",
    data: [
      {
        id: "7",
        icon: "icon",
        category: "Храна",
        date: "19.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "expense",
      },
      {
        id: "8",
        icon: "icon",
        category: "Храна",
        date: "24.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "expense",
      },
      {
        id: "9",
        icon: "icon",
        category: "Храна",
        date: "26.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "income",
      },
    ],
  },
  {
    title: "5 Nov to 11 Nov",
    data: [
      {
        id: "10",
        icon: "icon",
        category: "Храна",
        date: "19.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "expense",
      },
      {
        id: "11",
        icon: "icon",
        category: "Храна",
        date: "24.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "expense",
      },
      {
        id: "12",
        icon: "icon",
        category: "Храна",
        date: "26.11.2024",
        amount: "50.00",
        typeFrom: "cash",
        type: "income",
      },
    ],
  },
];

const transactions = () => {
  const renderRecentTransactions = ({ item }: RecentTransactionType) => (
    <RecentTransaction item={item} className="bg-white" />
  );
  return (
    <SafeAreaView>
      <View className="mt-4 mx-4">
        <SectionList
          ListHeaderComponent={<TopSide />}
          className="pb-10"
          sections={sectionListData}
          keyExtractor={(item) => item.id}
          // This must round bottom border if is last item in the list
          renderItem={renderRecentTransactions}
          renderSectionHeader={({ section: { title } }) => (
            <View className="bg-white mt-4 px-4 pt-4 rounded-t-xl">
              <Text>{title}</Text>
              <View className="w-full h-[1px] bg-gray-300 my-4" />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default transactions;
