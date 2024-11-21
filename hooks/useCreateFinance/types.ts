import { DropDownWithSearchRefType } from "@/components/Atoms/DropDownWithSearch/types";
import { ArticleType } from "@/components/Molecules/ArticleInput/types";
import { FinanceTypeEnum } from "@/components/Screens/Finances/types";
import { RefObject } from "react";

export type UseCreateFinanceProps = ({ type }: { type: FinanceTypeEnum }) => {
  article: ArticleType;
  onArticleChange: (key: keyof ArticleType, value: string) => void;
  categoryRef: RefObject<DropDownWithSearchRefType>;
  accountRef: RefObject<DropDownWithSearchRefType>;
  image: string | null;
  uploadImageHandler: () => void;
  submitHandler: () => Promise<void>;
};
