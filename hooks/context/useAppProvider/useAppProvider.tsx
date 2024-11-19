import React, { createContext, useState } from "react";
import { AppContextType } from "./types";

// Define the initial values for user and isUserLoading
const initialUser = null;

// Create the context
export const AppContext = createContext({
  user: initialUser,
  setUser: (user: any) => {},
});

// Create the provider component
export const AppProvider: React.FC<AppContextType> = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
