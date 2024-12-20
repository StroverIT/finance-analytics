import { View, SafeAreaView } from "react-native";
import React from "react";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import Button from "@/components/Atoms/Button";
import ArticleInput from "@/components/Molecules/ArticleInput";
import CategoryWithAccountInputs from "@/components/Molecules/CategoryWithAccountInputs";
import { FinanceTypeEnum } from "@/components/Screens/Finances/types";
import useCreateFinance from "@/hooks/useCreateFinance";

const expenses = () => {
  const { article, onArticleChange, categoryRef, accountRef, submitHandler } =
    useCreateFinance({ type: FinanceTypeEnum.INCOME });

  return (
    <SafeAreaView className="mx-4 mt-4">
      <HeaderWithBackBtn title="Приходи" />

      <View className="mt-6">
        <CategoryWithAccountInputs
          accountRef={accountRef}
          categoryRef={categoryRef}
        />
      </View>
      <View className="gap-4 mt-4">
        <View className="gap-4">
          <ArticleInput
            price={article.price}
            type={article.type}
            // @ts-ignore
            onChange={onArticleChange}
          />
        </View>
      </View>

      <View className="mt-4">
        <Button text="Изпрати" onPress={submitHandler} />
      </View>
    </SafeAreaView>
  );
};

export default expenses;
