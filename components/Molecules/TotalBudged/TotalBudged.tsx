import { View } from "react-native";
import React, { useContext, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { getTotalBudget } from "@/API/finance";
import ShowAllAccounts from "@/components/Organism/ShowAllAccounts";
import SharedPreferencesModule from "@/utils/nativeModules/SharedPreferencesModule";
import ShowTotalAndLeftMoney from "@/components/Molecules/ShowTotalAndLeftMoney";

export const TotalBudged = () => {
  const { user } = useContext(AppContext);

  const totalBudget = useQuery({
    queryKey: ["totalBudget"],
    queryFn: getTotalBudget.bind(null, user?.uid as string),
  });

  // Also this could be in the application layout and check for totalBudgett change
  // Because if we are on different screen and change something related, it wont be displayed here
  useEffect(() => {
    if (totalBudget.data)
      SharedPreferencesModule.setWidgetData(
        "widget_text",
        JSON.stringify(totalBudget.data)
      );
  }, [totalBudget.data]);

  return (
    <View className="bg-white p-4">
      <ShowTotalAndLeftMoney />
      <ShowAllAccounts />
    </View>
  );
};
