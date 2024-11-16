import { View, Text } from "react-native";
import React, { FC } from "react";
import { RowProps } from "./types";
import { styles } from "./styles";

export const Row: FC<RowProps> = ({ children, className }) => (
  <View style={styles.row} className={className}>
    {children}
  </View>
);
