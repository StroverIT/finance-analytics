import React, { useImperativeHandle, useState, forwardRef } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { dataToDropDown, months } from "@/utils/dataTransform";
import { DropDownProps, RefDropDownType } from "./types";
import { styles } from "./styles";

const data = dataToDropDown(months);

export const DropDown = forwardRef<RefDropDownType, DropDownProps>(
  ({}, ref: RefDropDownType) => {
    const [value, setValue] = useState("0");
    const [isFocus, setIsFocus] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        getData: () => value,
      }),
      [value]
    );

    return (
      <View>
        <Dropdown
          ref={ref}
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  }
);
