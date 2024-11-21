import React, {
  useLayoutEffect,
  useMemo,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Dropdown } from "react-native-element-dropdown";
import {
  DropDownWithSearchProps,
  DropDownWithSearchRefType,
  RefDropDownType,
} from "./types";
import { styles } from "./styles";

// TODO: try without forwardRef
export const DropDownWithSearch = forwardRef<
  DropDownWithSearchRefType,
  DropDownWithSearchProps
>(({ data = [], placeholder, isFirstItem }, ref: RefDropDownType) => {
  const formattedData = useMemo(() => {
    return data.map((item: any) => {
      return { label: item.name, value: item._id };
    });
  }, [data]);

  const [value, setValue] = useState<string | null>(null);

  useLayoutEffect(() => {
    setValue(
      isFirstItem && formattedData.length > 0
        ? formattedData[formattedData.length - 1].value
        : null
    );
  }, [formattedData]);

  useImperativeHandle(
    ref,
    () => ({
      getData: () => value,
    }),
    [value]
  );

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
      onChange={(item: any) => {
        setValue(item.value);
      }}
    />
  );
});
