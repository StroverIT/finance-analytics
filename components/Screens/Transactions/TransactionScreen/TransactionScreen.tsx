import { View, Text, SectionList } from "react-native";
import React, { useContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMonthlyExpensesPerWeek } from "@/API/finance";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { TransactionContext } from "@/hooks/context/useTransactionProvider";
import { FinancePopulatedType } from "@/API/finance/types";
import RecentTransaction from "@/components/Molecules/RecentTransaction";
import TopSide from "../TopSide";
import { getWeekTitle } from "@/utils/datesTransofrm";
import { TransformedMonthlyTransactions } from "./types";

const TransactionScreen = () => {
  const { user } = useContext(AppContext);
  const { selectedMonth, selectedCategory } = useContext(TransactionContext);

  const monthlyTransactions = useQuery({
    queryKey: ["monthlyTransactions"],
    queryFn: getMonthlyExpensesPerWeek.bind(null, {
      userId: user?.uid as string,
      month: selectedMonth,
      category: selectedCategory,
    }),
  });

  const renderRecentTransactions = ({
    item,
  }: {
    item: FinancePopulatedType;
  }) => <RecentTransaction item={item} className="bg-white" />;

  const transformedMonthlyTransactions = useMemo(() => {
    if (!monthlyTransactions.data) return [];
    // @ts-ignore
    const objectToArray = Object.entries(monthlyTransactions.data);
    // @ts-ignore
    const transformedArray = objectToArray.map(([key, value], index) => ({
      _id: key,
      title: getWeekTitle(index, parseInt(selectedMonth)),
      data: value,
    })) as TransformedMonthlyTransactions[];

    const filteredArray = transformedArray.filter(
      (item) => item.data?.length > 0
    );

    return filteredArray.reverse();
  }, [monthlyTransactions.data]);

  return (
    <View className="mt-4 mx-4">
      <SectionList
        ListHeaderComponent={<TopSide />}
        className="pb-10"
        sections={transformedMonthlyTransactions}
        keyExtractor={(item) => item._id}
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
  );
};

export default TransactionScreen;
