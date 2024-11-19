import TabBar from "@/components/layout/TabBar";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={({ state, descriptors, navigation }) => (
        <TabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarLabel: "transactions",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "account",
          tabBarLabel: "account",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
