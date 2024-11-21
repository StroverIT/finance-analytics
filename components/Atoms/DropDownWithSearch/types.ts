import { GetAccountBalanceDataType } from "@/API/account/types";
import { ForwardedRef } from "react";

export type DropDownWithSearchProps = {
  data?: GetAccountBalanceDataType[];
  placeholder: string;
  isFirstItem?: boolean;
};

export type DropDownWithSearchRefType = {
  getData: () => string | null;
};

export type RefDropDownType = ForwardedRef<DropDownWithSearchRefType>;
