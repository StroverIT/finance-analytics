import { ForwardedRef } from "react";

export type DropDownProps = {};

export type DropDownRef = {};

export type DropDownWithSearchRefType = {
  getData: () => string;
};

export type RefDropDownType = ForwardedRef<DropDownWithSearchRefType>;
