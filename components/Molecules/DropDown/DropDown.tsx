import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  Ref,
  FC,
} from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { dataToDropDown, months } from "@/utils/dataTransform";

import { styles } from "./styles";
import { DropDownProps } from "./types";

const data = dataToDropDown(months);

const date = new Date(new Date());
const month = date.getMonth().toString();

export const DropDown: FC<DropDownProps> = ({ onChange, value }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <Dropdown
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
          setIsFocus(false);
          onChange(item.value);
        }}
      />
    </View>
  );
};
