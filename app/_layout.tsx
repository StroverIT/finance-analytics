import { SplashScreen, Stack, router, usePathname } from "expo-router";
import "@/global.css";
import * as Notifications from "expo-notifications";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { registerForPushNotificationsAsync } from "@/lib/expo-notifications";
import { AppProvider } from "@/hooks/context/useAppProvider/useAppProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { UserType } from "@/hooks/context/useAppProvider/types";

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function RootLayout() {
  const pathname = usePathname();
  const [user, setUser] = useState<UserType | null>(null);
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

    const firebaseAuth = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = authUser.uid;
        setUser({
          email: authUser.email as string,
          uid,
        });
        if (pathname.includes("authentication") || pathname === "/")
          router.push("/application");
      } else {
        // User is signed out
        setUser(null);
        if (!pathname.includes("authentication") || pathname === "/")
          router.push("/authentication");
      }
    });
    return firebaseAuth;
  }, []);

  return (
    <AppProvider user={user} setUser={setUser}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
