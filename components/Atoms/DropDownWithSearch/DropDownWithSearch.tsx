import React, { FC, useMemo, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { DropDownWithSearchProps } from "./types";

export const DropDownWithSearch: FC<DropDownWithSearchProps> = ({
  data,
  placeholder,
}) => {
  const formattedData = useMemo(() => {
    return data.map((item) => {
      return { label: item, value: item };
    });
  }, [data]);

  const [value, setValue] = useState<string | null>(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={formattedData}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Търси..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
