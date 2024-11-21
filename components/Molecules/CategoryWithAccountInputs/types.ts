import { DropDownWithSearchRefType } from "@/components/Atoms/DropDownWithSearch/types";
import { FinanceTypeEnum } from "@/components/Screens/Finances/types";

export type CategoryWithAccountInputsProps = {
  categoryRef: React.RefObject<DropDownWithSearchRefType>;
  accountRef: React.RefObject<DropDownWithSearchRefType>;
};
