import { View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import Button from "@/components/Atoms/Button";
import ArticleInput from "@/components/Molecules/ArticleInput";
import { ArticleType } from "@/components/Molecules/ArticleInput/types";
import CategoryWithAccountInputs from "@/components/Molecules/CategoryWithAccountInputs";
import { FinanceTypeEnum } from "@/components/Screens/Finances/types";
import useCreateFinance from "@/hooks/useCreateFinance";

const expenses = () => {
  const { article, onArticleChange, categoryRef, accountRef, submitHandler } =
    useCreateFinance({ type: FinanceTypeEnum.INCOME });

  return (
    <SafeAreaView className="mx-4 mt-4">
      <HeaderWithBackBtn title="Приходи" />

      <View className="gap-4 mt-10">
        <View className="gap-4">
          <ArticleInput
            price={article.price}
            type={article.type}
            // @ts-ignore
            onChange={onArticleChange}
          />
        </View>
      </View>
      <CategoryWithAccountInputs
        accountRef={accountRef}
        categoryRef={categoryRef}
      />
      <View className="mt-4">
        <Button text="Изпрати" onPress={submitHandler} />
      </View>
    </SafeAreaView>
  );
};

export default expenses;
