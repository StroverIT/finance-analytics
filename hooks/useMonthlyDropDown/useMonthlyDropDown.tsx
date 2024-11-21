import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { UseMonthlyDropDownType } from "./types";

const date = new Date(new Date());
const currentMonth = date.getMonth().toString();

export const useMonthlyDropDown: UseMonthlyDropDownType = ({ queryKey }) => {
  const [selectedMonth, setValue] = useState(currentMonth);

  const queryClient = useQueryClient();

  const onChangeDropDown = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [queryKey] });
  }, [selectedMonth]);

  return {
    selectedMonth,
    onChangeDropDown,
  };
};
