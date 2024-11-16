import React from "react";
import DropDown from "@/components/Molecules/DropDown";
import { View, Text, FlatList, ScrollView } from "react-native";

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
export const TopSide = () => {
  return (
    <>
      <Text className="text-center text-2xl font-semibold">Транзакции</Text>
      <View className=" bg-white px-2 py-4 my-4 rounded-xl">
        <Text className="font-semibold text-lg">Похарчени пари за месеца</Text>
        <Text className="text-2xl mt-2 font-semibold text-[#352DFF]">2000</Text>
      </View>

      {/* TODO: This somehow can be made sticky */}
      <View className="justify-between items-center flex-row mt-4">
        <Text className="text-xl font-semibold flex-1">Текущи разходи</Text>
        {/* TODO: This also must include the Year for now is only monthly */}
        <DropDown />
      </View>
      <FlatList
        className="mt-6 sticky top-0"
        data={data}
        renderItem={({ item }) => {
          const { isSelected } = item;
          return (
            <View
              className={` ${
                isSelected ? "bg-[#0141EB]" : "bg-white"
              } py-2 px-4 rounded-xl mx-2`}
            >
              <Text
                className={`${
                  isSelected ? "text-white" : "text-black"
                } text-lg`}
              >
                {item.category}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
