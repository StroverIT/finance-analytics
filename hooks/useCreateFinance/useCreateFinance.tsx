import React, { useContext, useRef, useState } from "react";
import useUploadImage from "@/hooks/useUploadImage";
import { AppContext } from "../context/useAppProvider/useAppProvider";
import { ArticleType } from "@/components/Molecules/ArticleInput/types";
import { DropDownWithSearchRefType } from "@/components/Atoms/DropDownWithSearch/types";
import { CreateFinanceDataType } from "@/API/finance/types";
import { createFinance } from "@/API/finance/finance";
import { router } from "expo-router";
import { UseCreateFinanceProps } from "./types";

export const useCreateFinance: UseCreateFinanceProps = ({ type }) => {
  const { user } = useContext(AppContext);
  const [article, setArticle] = useState<ArticleType>({
    price: "0",
    type: "",
  });
  const categoryRef = useRef<DropDownWithSearchRefType>(null);
  const accountRef = useRef<DropDownWithSearchRefType>(null);

  const onArticleChange = (key: keyof ArticleType, value: string) => {
    setArticle((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const { image, imageUrl, uploadImageHandler } = useUploadImage();

  const submitHandler = async () => {
    const category = categoryRef.current?.getData();
    const account = accountRef.current?.getData();

    if (!user || !user?.uid) return;

    const dataToSend = {
      userId: user.uid,
      article: article.type,
      price: article.price,
      categoryId: category,
      accountBalanceId: account,
      billImage: imageUrl,
      type,
    } as CreateFinanceDataType;

    const response = await createFinance(dataToSend);

    if (response?.message) router.push("/application/(tabs)");
  };

  return {
    article,
    onArticleChange,
    categoryRef,
    accountRef,
    image,
    uploadImageHandler,
    submitHandler,
  };
};
