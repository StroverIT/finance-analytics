import { View, Text, SectionList, SafeAreaView } from "react-native";
import React from "react";
import TopSide from "@/components/Screens/Transactions/TopSide";
import { RecentTransactionType } from "@/components/Molecules/RecentTransaction/types";
import RecentTransaction from "@/components/Molecules/RecentTransaction";

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
          sections={[]}
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
