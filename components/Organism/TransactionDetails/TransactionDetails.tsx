import { View, Text, FlatList, Image, Pressable } from "react-native";
import React, { useContext, useMemo, useState } from "react";
import DropDown from "@/components/Molecules/DropDown";
import useMonthlyDropDown from "@/hooks/useMonthlyDropDown";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/API/category";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { CategorySchemaType } from "@/API/category/types";

const data = [
  {
    id: "0",
    icon: "icon",
    category: "Виж всички",
    isSelected: true,
    isViewAll: true,
  },
  {
    id: "1",
    icon: "icon",
    category: "Храна",
    isSelected: false,
  },
  {
    id: "2",
    icon: "icon",
    category: "Пътуване",
    isSelected: false,
  },
  {
    id: "3",
    icon: "icon",
    category: "Сметки",
    isSelected: false,
  },
  {
    id: "4",
    icon: "icon",
    category: "Няма брато нещо",
    isSelected: false,
  },
];

export const TransactionDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("Виж всички");
  const { user } = useContext(AppContext);
  const { onChangeDropDown, selectedMonth } = useMonthlyDropDown({
    queryKey: "monthlyExpensesPerWeek",
  });

  const category = useQuery({
    queryKey: ["category"],
    queryFn: getCategory.bind(null, user?.uid as string),
  });

  const categoryData = useMemo(() => {
    return [
      {
        name: "Виж всички",
        userId: "1",
        isViewAll: true,
        _id: "0",
      },
      // @ts-ignore
      ...category.data,
    ];
  }, [category.data]);

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
