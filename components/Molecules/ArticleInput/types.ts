export type ArticleInputProps = Omit<ArticleType, "onChange"> & {
  onChange: (key: string, value: string) => void;
};

export type ArticleType = {
  price: string;
  type: string;
};
