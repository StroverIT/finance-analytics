import { View, Text, FlatList, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import DropDown from "@/components/Molecules/DropDown";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/API/category";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { CategorySchemaType } from "@/API/category/types";
import { TransactionContext } from "@/hooks/context/useTransactionProvider";

export const TransactionDetails = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    onChangeDropDown,
    selectedMonth,
  } = useContext(TransactionContext);

  const { user } = useContext(AppContext);

  const category = useQuery({
    queryKey: ["category"],
    queryFn: getCategory.bind(null, user?.uid as string),
  });
  const categoryCond = category?.data ? category.data : [];

  const categoryData = [
    {
      name: "Виж всички",
      userId: "1",
      isViewAll: true,
      _id: "see all",
    },
    ...categoryCond,
  ];

  return (
    <>
      {/* TODO: This somehow can be made sticky */}
      <View className="justify-between items-center flex-row mt-4">
        <Text className="text-xl font-semibold flex-1">Текущи разходи</Text>
        {/* TODO: This also must include the Year for now is only monthly */}
        <DropDown onChange={onChangeDropDown} value={selectedMonth} />
      </View>
      <FlatList
        className="mt-6 sticky top-0"
        // @ts-ignore
        data={categoryData}
        renderItem={({ item }: { item: CategorySchemaType }) => {
          const isSelected = item.name === selectedCategory;

          return (
            <Pressable
              className={`flex-row ${
                isSelected ? "bg-[#0141EB]" : "bg-white"
              } py-2 px-4 rounded-xl mx-2`}
              onPress={() => setSelectedCategory(item.name)}
            >
              {item.icon && (
                <Image
                  source={{ uri: item.icon }}
                  className="h-6 w-6 mr-2"
                  style={{
                    objectFit: "contain",
                  }}
                />
              )}
              <Text
                className={`${
                  isSelected ? "text-white" : "text-black"
                } text-lg`}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item._id}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
