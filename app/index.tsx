import React from "react";
import { Redirect } from "expo-router";

const Index = () => {
  const isLoggedIn = false;
  // This must checked if logged in to go in authentication
  // If is authenticated go to home of the app
  return !isLoggedIn ? (
    <Redirect href="/authentication" />
  ) : (
    <Redirect href="/application/(tabs)" />
  );
};

export default Index;
