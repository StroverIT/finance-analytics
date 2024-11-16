import { View, Text } from "react-native";
import React, { FC } from "react";
import { ColProps, StyleKeys } from "./types";
import { styles } from "./styles";

export const Col: FC<ColProps> = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col` as StyleKeys]}>{children}</View>;
};
