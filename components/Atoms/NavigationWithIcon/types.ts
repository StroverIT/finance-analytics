import { ReactNode } from "react";

export type NavigationWithIconProps = {
  onPress: () => void;
  title: string;
  icon: ReactNode;
};
