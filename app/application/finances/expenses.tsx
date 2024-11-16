import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderWithBackBtn from "@/components/Atoms/HeaderWithBackBtn";
import Button from "@/components/Atoms/Button";
import { ColorThemes } from "@/components/Atoms/Button/types";
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

  const addArticle = () => {
    setArticles([...articles, { price: "0", type: "" }]);
  };

  return (
    <SafeAreaView className="mx-4 mt-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        stickyHeaderIndices={[1]}
      >
        <HeaderWithBackBtn title="Разходи" />
        <View className="my-4">
          <Button
            text="Добави артикул"
            onPress={addArticle}
            theme={ColorThemes.green}
          />
        </View>
        <View className="gap-4">
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default expenses;
