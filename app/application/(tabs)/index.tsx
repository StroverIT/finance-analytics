import { FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect } from "react";

import { RecentTransaction } from "@/components/Molecules/RecentTransaction/RecentTransaction";
import TopSide from "@/components/Screens/HomeScreen/Topside";
import { RecentTransactionType } from "@/components/Molecules/RecentTransaction/types";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { useQuery } from "@tanstack/react-query";
import { recentTransaction } from "@/API/finance";
import SharedPreferencesModule from "@/utils/nativeModules/SharedPreferencesModule";

const Index = () => {
  const { user } = useContext(AppContext);

  const recentTransactions = useQuery({
    queryKey: ["recentTransactions"],
    queryFn: recentTransaction.bind(null, user?.uid as string),
  });

  const renderRecentTransactions = ({ item }: RecentTransactionType) => (
    <RecentTransaction item={item} />
  );

  useEffect(() => {
    console.log("test+++ vliza ?");
    SharedPreferencesModule.setWidgetData(
      "WidgetData",
      "Updated data from React Native!"
    );
  }, [recentTransactions.data]);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<TopSide />}
        data={recentTransactions.data}
        renderItem={renderRecentTransactions}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

export default Index;
