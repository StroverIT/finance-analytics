import { View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import Button from "@/components/Atoms/Button";
import ArticleInput from "@/components/Molecules/ArticleInput";
import { ArticleType } from "@/components/Molecules/ArticleInput/types";
import CategoryWithAccountInputs from "@/components/Molecules/CategoryWithAccountInputs";

const expenses = () => {
  const [articles, setArticles] = useState<ArticleType[]>([
    {
      price: "0",
      type: "",
    },
  ]);

  const onArticleChange = (
    index: number,
    key: keyof ArticleType,
    value: string
  ) => {
    const newArticles = [...articles];
    newArticles[index] = {
      ...newArticles[index],
      [key]: value,
    };
    setArticles(newArticles);
  };

  return (
    <SafeAreaView className="mx-4 mt-4">
      <HeaderWithBackBtn title="Приходи" />

      <View className="gap-4 mt-10">
        {articles.map((article, index) => {
          const { price, type } = article;
          return (
            <ArticleInput
              key={index}
              price={price}
              type={type}
              // @ts-ignore
              onChange={onArticleChange.bind(null, index)}
            />
          );
        })}
      </View>
      <CategoryWithAccountInputs />
      <View className="mt-4">
        <Button text="Изпрати" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default expenses;
