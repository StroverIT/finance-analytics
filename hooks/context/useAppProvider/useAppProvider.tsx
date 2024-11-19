import React, { createContext } from "react";
import { AppContextType, UserType } from "./types";

// Define the initial values for user and isUserLoading
const initialUser: UserType | null = null;

// Create the context
export const AppContext = createContext<{
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}>({
  user: initialUser,
  setUser: (user: UserType | null) => {},
});

// Create the provider component
export const AppProvider: React.FC<AppContextType> = ({
  children,
  user,
  setUser,
}) => {
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
