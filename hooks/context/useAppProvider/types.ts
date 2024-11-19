import { Dispatch, SetStateAction } from "react";

export type UserType = {
  email: string;
  uid: string;
};

export type AppContextType = {
  children: React.ReactNode;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
};
