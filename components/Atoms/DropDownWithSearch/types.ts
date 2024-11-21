import { ForwardedRef } from "react";

type DataType = {
  name: string;
  _id: string;
};

export type DropDownWithSearchProps = {
  data: DataType[];
  placeholder: string;
  isFirstItem?: boolean;
};

export type DropDownWithSearchRefType = {
  getData: () => string | null;
};

export type RefDropDownType = ForwardedRef<DropDownWithSearchRefType>;
