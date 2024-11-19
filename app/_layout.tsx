import { SplashScreen, Stack } from "expo-router";
import "@/global.css";
import * as Notifications from "expo-notifications";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { registerForPushNotificationsAsync } from "@/lib/expo-notifications";
import { AppProvider } from "@/hooks/context/useAppProvider/useAppProvider";

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <AppProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="authentication" options={{ headerShown: false }} />
        <Stack.Screen
          name="/application/(application)"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
