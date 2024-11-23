import { View } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import { icons } from "@/assets/images/applicationTabIcons/icons";
import { RouteNameType, TabBarProps } from "./types";
import React, { FC } from "react";

export const TabBar: FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const { buildHref } = useLinkBuilder();

  return (
    <View className="flex-row  bg-[#514BF3] rounded-full mx-10 items-center justify-between px-10">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            pressColor="rgba(0, 0, 0, 0.00)"
            onLongPress={onLongPress}
            className="px-5"
          >
            <View className="items-center py-8  justify-center flex-1">
              {icons[route.name as RouteNameType]({
                width: 24,
                height: 24,
              })}
              <View
                className={`mt-1 ${
                  isFocused ? "bg-white h-1 w-full rounded-xl" : null
                }`}
              />
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
};
