import { View, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import Button from "@/components/Atoms/Button";
import { ColorThemes } from "@/components/Atoms/Button/types";
import ArticleInput from "@/components/Molecules/ArticleInput";
import CategoryWithAccountInputs from "@/components/Molecules/CategoryWithAccountInputs";
import useCreateFinance from "@/hooks/useCreateFinance";
import { FinanceTypeEnum } from "@/components/Screens/Finances/types";

const expenses = () => {
  const {
    article,
    onArticleChange,
    categoryRef,
    accountRef,
    image,
    uploadImageHandler,
    submitHandler,
  } = useCreateFinance({ type: FinanceTypeEnum.EXPENSE });

  return (
    <SafeAreaView className="mx-4 mt-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <HeaderWithBackBtn title="Разходи" />
        <View className="mt-4">
          <Button
            text="Добави снимка на сметката"
            onPress={uploadImageHandler}
            theme={ColorThemes.green}
          />
          {image && <Image source={{ uri: image }} className="h-24 w-full" />}
        </View>
        <CategoryWithAccountInputs
          accountRef={accountRef}
          categoryRef={categoryRef}
        />
        <View className="gap-4 mt-4">
          <ArticleInput
            price={article.price}
            type={article.type}
            // @ts-ignore
            onChange={onArticleChange}
          />
        </View>

        <View className="mt-4">
          <Button text="Изпрати" onPress={submitHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default expenses;
